/**
 * Multi-Provider AI Factory
 * Supports: OpenAI, Gemini, Claude, DeepSeek, Grok, Ollama, Qwen
 */

export interface AIProviderConfig {
  provider: string;    // openai, gemini, claude, deepseek, grok, ollama, qwen
  model: string;       // gpt-4o-mini, gemini-2.0-flash, claude-3-haiku, etc.
  apiKey: string;
  baseUrl?: string;    // For Ollama or custom endpoints
  temperature?: number;
  maxTokens?: number;
}

export interface AIMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface AIResponse {
  content: string;
  model: string;
  tokensUsed?: number;
  provider: string;
}

const PROVIDER_ENDPOINTS: Record<string, string> = {
  openai: "https://api.openai.com/v1/chat/completions",
  gemini: "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent",
  claude: "https://api.anthropic.com/v1/messages",
  deepseek: "https://api.deepseek.com/chat/completions",
  grok: "https://api.x.ai/v1/chat/completions",
  qwen: "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",
  ollama: "http://localhost:11434/v1/chat/completions",
};

const DEFAULT_MODELS: Record<string, string> = {
  openai: "gpt-4o-mini",
  gemini: "gemini-2.0-flash",
  claude: "claude-3-haiku-20240307",
  deepseek: "deepseek-chat",
  grok: "grok-beta",
  qwen: "qwen-plus",
  ollama: "llama3.2",
};

/**
 * Send messages to any AI provider and get response
 */
export async function chat(config: AIProviderConfig, messages: AIMessage[]): Promise<AIResponse> {
  const provider = config.provider.toLowerCase();
  const model = config.model || DEFAULT_MODELS[provider] || "gpt-4o-mini";
  const temperature = config.temperature ?? 0.7;
  const maxTokens = config.maxTokens ?? 2048;

  switch (provider) {
    case "gemini":
      return chatGemini(config, messages, model, temperature, maxTokens);
    case "claude":
      return chatClaude(config, messages, model, temperature, maxTokens);
    default:
      // OpenAI-compatible: openai, deepseek, grok, qwen, ollama
      return chatOpenAICompatible(config, messages, model, temperature, maxTokens, provider);
  }
}

/**
 * OpenAI-compatible API (works for OpenAI, DeepSeek, Grok, Qwen, Ollama)
 */
async function chatOpenAICompatible(
  config: AIProviderConfig, messages: AIMessage[], model: string,
  temperature: number, maxTokens: number, provider: string
): Promise<AIResponse> {
  const baseUrl = config.baseUrl || PROVIDER_ENDPOINTS[provider] || PROVIDER_ENDPOINTS.openai;

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature,
      max_tokens: maxTokens,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`[${provider}] API error ${response.status}: ${error}`);
  }

  const data = await response.json();
  return {
    content: data.choices?.[0]?.message?.content || "",
    model: data.model || model,
    tokensUsed: data.usage?.total_tokens,
    provider,
  };
}

/**
 * Google Gemini API
 */
async function chatGemini(
  config: AIProviderConfig, messages: AIMessage[], model: string,
  temperature: number, maxTokens: number
): Promise<AIResponse> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${config.apiKey}`;

  // Convert messages to Gemini format
  const systemInstruction = messages.find((m) => m.role === "system");
  const contents = messages
    .filter((m) => m.role !== "system")
    .map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

  const body: Record<string, unknown> = {
    contents,
    generationConfig: {
      temperature,
      maxOutputTokens: maxTokens,
    },
  };

  if (systemInstruction) {
    body.systemInstruction = { parts: [{ text: systemInstruction.content }] };
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`[Gemini] API error ${response.status}: ${error}`);
  }

  const data = await response.json();
  return {
    content: data.candidates?.[0]?.content?.parts?.[0]?.text || "",
    model,
    tokensUsed: data.usageMetadata?.totalTokenCount,
    provider: "gemini",
  };
}

/**
 * Anthropic Claude API
 */
async function chatClaude(
  config: AIProviderConfig, messages: AIMessage[], model: string,
  temperature: number, maxTokens: number
): Promise<AIResponse> {
  const url = PROVIDER_ENDPOINTS.claude;

  // Extract system message
  const systemMessage = messages.find((m) => m.role === "system")?.content || "";
  const chatMessages = messages
    .filter((m) => m.role !== "system")
    .map((m) => ({ role: m.role, content: m.content }));

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": config.apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model,
      system: systemMessage,
      messages: chatMessages,
      temperature,
      max_tokens: maxTokens,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`[Claude] API error ${response.status}: ${error}`);
  }

  const data = await response.json();
  return {
    content: data.content?.[0]?.text || "",
    model: data.model || model,
    tokensUsed: (data.usage?.input_tokens || 0) + (data.usage?.output_tokens || 0),
    provider: "claude",
  };
}

/**
 * Get available providers list
 */
export function getAvailableProviders(): Array<{ id: string; name: string; models: string[] }> {
  return [
    { id: "openai", name: "OpenAI", models: ["gpt-4o", "gpt-4o-mini", "gpt-4-turbo", "gpt-3.5-turbo"] },
    { id: "gemini", name: "Google Gemini", models: ["gemini-2.0-flash", "gemini-1.5-pro", "gemini-1.5-flash"] },
    { id: "claude", name: "Anthropic Claude", models: ["claude-3-5-sonnet-20241022", "claude-3-haiku-20240307", "claude-3-opus-20240229"] },
    { id: "deepseek", name: "DeepSeek", models: ["deepseek-chat", "deepseek-reasoner"] },
    { id: "grok", name: "xAI Grok", models: ["grok-beta", "grok-2"] },
    { id: "qwen", name: "Alibaba Qwen", models: ["qwen-plus", "qwen-turbo", "qwen-max"] },
    { id: "ollama", name: "Ollama (Local)", models: ["llama3.2", "mistral", "phi3", "gemma2"] },
  ];
}
