/**
 * Flow Executor Engine — Executes chatbot flows node-by-node
 * 
 * Node Types:
 * - message: Send a message to the user
 * - condition: Branch based on user input or variables
 * - input: Wait for user input and store in variable
 * - api_call: Make an HTTP request to external API
 * - ai_agent: Get response from AI agent
 * - delay: Wait for specified time
 * - transfer: Transfer to human agent / department
 * - set_variable: Set a flow variable
 * - tag: Add tag to conversation
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PrismaClient = any;

export interface FlowNode {
  id: string;
  type: "message" | "condition" | "input" | "api_call" | "ai_agent" | "delay" | "transfer" | "set_variable" | "tag";
  data: Record<string, unknown>;
  position: { x: number; y: number };
  connections: FlowConnection[];
}

export interface FlowConnection {
  targetNodeId: string;
  label?: string;
  condition?: string; // For condition nodes: the matching value
}

export interface FlowContext {
  flowId: string;
  conversationId: string;
  currentNodeId: string;
  variables: Record<string, string>;
  waitingForInput: boolean;
  startedAt: Date;
}

export interface FlowExecutionResult {
  messages: Array<{ text: string; mediaUrl?: string; buttons?: Array<{ text: string; value: string }> }>;
  nextNodeId: string | null;
  waitForInput: boolean;
  transferTo?: string; // department ID
  variables: Record<string, string>;
  completed: boolean;
}

/**
 * Execute a single node in a flow
 */
export async function executeNode(
  node: FlowNode,
  context: FlowContext,
  userInput: string,
  prisma: PrismaClient
): Promise<FlowExecutionResult> {
  const result: FlowExecutionResult = {
    messages: [],
    nextNodeId: null,
    waitForInput: false,
    variables: { ...context.variables },
    completed: false,
  };

  switch (node.type) {
    case "message": {
      const text = interpolateVariables(node.data.text as string || "", result.variables);
      const buttons = node.data.buttons as Array<{ text: string; value: string }> | undefined;
      
      result.messages.push({
        text,
        mediaUrl: node.data.mediaUrl as string | undefined,
        buttons,
      });

      // If has buttons, wait for input
      if (buttons && buttons.length > 0) {
        result.waitForInput = true;
        result.nextNodeId = node.id; // Stay on same node until button is clicked
      } else {
        result.nextNodeId = node.connections[0]?.targetNodeId || null;
      }
      break;
    }

    case "condition": {
      const field = node.data.field as string || "input";
      const value = field === "input" ? userInput : (result.variables[field] || "");
      
      // Find matching connection
      const matchedConnection = node.connections.find((conn) => {
        if (!conn.condition) return false;
        const condition = conn.condition.toLowerCase();
        const val = value.toLowerCase();
        
        if (condition === "*" || condition === "default") return true;
        if (condition.startsWith("contains:")) return val.includes(condition.slice(9));
        if (condition.startsWith("regex:")) return new RegExp(condition.slice(6), "i").test(val);
        return val === condition || val.includes(condition);
      });

      // Fallback to "default" or last connection
      const defaultConnection = node.connections.find((c) => c.condition === "default" || c.condition === "*");
      result.nextNodeId = matchedConnection?.targetNodeId || defaultConnection?.targetNodeId || node.connections[0]?.targetNodeId || null;
      break;
    }

    case "input": {
      if (!context.waitingForInput) {
        // First visit: Show prompt and wait
        const prompt = interpolateVariables(node.data.prompt as string || "Digite sua resposta:", result.variables);
        result.messages.push({ text: prompt });
        result.waitForInput = true;
        result.nextNodeId = node.id;
      } else {
        // User responded: Store value and continue
        const variableName = node.data.variableName as string || "input";
        result.variables[variableName] = userInput;
        result.waitForInput = false;
        result.nextNodeId = node.connections[0]?.targetNodeId || null;
      }
      break;
    }

    case "api_call": {
      try {
        const url = interpolateVariables(node.data.url as string || "", result.variables);
        const method = (node.data.method as string || "GET").toUpperCase();
        const headers = node.data.headers as Record<string, string> || {};
        const body = node.data.body ? interpolateVariables(JSON.stringify(node.data.body), result.variables) : undefined;

        const response = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json", ...headers },
          body: method !== "GET" ? body : undefined,
        });

        const data = await response.json();
        let outVar = node.data.outputVariable as string || "api_response";
        result.variables[outVar] = JSON.stringify(data);
        result.variables[`${outVar}_status`] = String(response.status);
      } catch (error) {
        result.variables.api_error = error instanceof Error ? error.message : "API call failed";
      }
      result.nextNodeId = node.connections[0]?.targetNodeId || null;
      break;
    }

    case "ai_agent": {
      // This will be handled by the AI provider factory
      const agentId = node.data.agentId as string;
      const prompt = interpolateVariables(node.data.prompt as string || userInput, result.variables);
      
      result.variables._ai_agent_id = agentId || "default";
      result.variables._ai_prompt = prompt;
      result.variables._ai_pending = "true";
      
      result.nextNodeId = node.connections[0]?.targetNodeId || null;
      break;
    }

    case "delay": {
      const seconds = parseInt(node.data.seconds as string || "1");
      await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
      result.nextNodeId = node.connections[0]?.targetNodeId || null;
      break;
    }

    case "transfer": {
      const departmentId = node.data.departmentId as string;
      const message = interpolateVariables(node.data.message as string || "Transferindo para um atendente...", result.variables);
      
      result.messages.push({ text: message });
      result.transferTo = departmentId;
      result.completed = true;
      break;
    }

    case "set_variable": {
      const varName = node.data.variableName as string || "var";
      const varValue = interpolateVariables(node.data.value as string || "", result.variables);
      result.variables[varName] = varValue;
      result.nextNodeId = node.connections[0]?.targetNodeId || null;
      break;
    }

    case "tag": {
      const tagName = node.data.tagName as string;
      if (tagName && context.conversationId) {
        // Add tag to conversation
        try {
          let tag = await prisma.tag.findUnique({ where: { name: tagName } });
          if (!tag) {
            tag = await prisma.tag.create({ data: { name: tagName } });
          }
          await prisma.conversationTag.create({
            data: { conversationId: context.conversationId, tagId: tag.id },
          }).catch(() => {}); // Ignore if already tagged
        } catch {}
      }
      result.nextNodeId = node.connections[0]?.targetNodeId || null;
      break;
    }

    default:
      result.nextNodeId = node.connections[0]?.targetNodeId || null;
  }

  if (!result.nextNodeId && !result.waitForInput) {
    result.completed = true;
  }

  return result;
}

/**
 * Run a complete flow from start or resume from current node
 */
export async function runFlow(
  flow: { nodes: FlowNode[]; startNodeId: string },
  context: FlowContext,
  userInput: string,
  prisma: PrismaClient,
  maxSteps = 20
): Promise<FlowExecutionResult> {
  const allMessages: FlowExecutionResult["messages"] = [];
  let currentNodeId = context.currentNodeId || flow.startNodeId;
  let variables = { ...context.variables };
  let waitingForInput = context.waitingForInput;
  let steps = 0;

  while (currentNodeId && steps < maxSteps) {
    const node = flow.nodes.find((n) => n.id === currentNodeId);
    if (!node) break;

    const nodeContext: FlowContext = {
      ...context,
      currentNodeId: currentNodeId,
      variables,
      waitingForInput,
    };

    const result = await executeNode(node, nodeContext, userInput, prisma);
    allMessages.push(...result.messages);
    variables = result.variables;

    if (result.waitForInput) {
      return {
        messages: allMessages,
        nextNodeId: currentNodeId,
        waitForInput: true,
        variables,
        completed: false,
        transferTo: result.transferTo,
      };
    }

    if (result.completed || result.transferTo) {
      return {
        messages: allMessages,
        nextNodeId: null,
        waitForInput: false,
        variables,
        completed: true,
        transferTo: result.transferTo,
      };
    }

    currentNodeId = result.nextNodeId || "";
    waitingForInput = false;
    userInput = ""; // Clear input after first node processes it
    steps++;
  }

  return {
    messages: allMessages,
    nextNodeId: null,
    waitForInput: false,
    variables,
    completed: true,
  };
}

/**
 * Replace {{variable}} placeholders with values
 */
function interpolateVariables(text: string, variables: Record<string, string>): string {
  return text.replace(/\{\{(\w+)\}\}/g, (_, key) => variables[key] || `{{${key}}}`);
}
