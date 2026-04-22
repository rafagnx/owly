"use client";

import { useState, useCallback, useRef, useEffect } from "react";

// Types
interface FlowNode {
  id: string;
  type: string;
  label: string;
  data: Record<string, unknown>;
  position: { x: number; y: number };
}

interface FlowEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
  condition?: string;
}

const NODE_TYPES = [
  { type: "message", label: "Mensagem", icon: "💬", color: "bg-blue-500/20 border-blue-500/30" },
  { type: "condition", label: "Condição", icon: "🔀", color: "bg-amber-500/20 border-amber-500/30" },
  { type: "input", label: "Input", icon: "⌨️", color: "bg-emerald-500/20 border-emerald-500/30" },
  { type: "ai_agent", label: "Agente IA", icon: "🤖", color: "bg-purple-500/20 border-purple-500/30" },
  { type: "api_call", label: "API Call", icon: "🌐", color: "bg-cyan-500/20 border-cyan-500/30" },
  { type: "delay", label: "Delay", icon: "⏱️", color: "bg-orange-500/20 border-orange-500/30" },
  { type: "transfer", label: "Transferir", icon: "👤", color: "bg-red-500/20 border-red-500/30" },
  { type: "set_variable", label: "Variável", icon: "📝", color: "bg-indigo-500/20 border-indigo-500/30" },
  { type: "tag", label: "Tag", icon: "🏷️", color: "bg-pink-500/20 border-pink-500/30" },
];

export default function FlowBuilderPage() {
  const [nodes, setNodes] = useState<FlowNode[]>([
    { id: "start", type: "message", label: "Início", data: { text: "Olá! Como posso ajudar?" }, position: { x: 400, y: 100 } },
  ]);
  const [edges, setEdges] = useState<FlowEdge[]>([]);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const [connectingFrom, setConnectingFrom] = useState<string | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [flowName, setFlowName] = useState("Novo Flow");
  const canvasRef = useRef<HTMLDivElement>(null);

  const nodeTypeLookup = NODE_TYPES.reduce((acc, nt) => ({ ...acc, [nt.type]: nt }), {} as Record<string, typeof NODE_TYPES[number]>);

  const addNode = (type: string) => {
    const nt = nodeTypeLookup[type];
    if (!nt) return;

    const newNode: FlowNode = {
      id: `node_${Date.now()}`,
      type,
      label: nt.label,
      data: getDefaultData(type),
      position: { x: 200 + Math.random() * 300, y: 200 + Math.random() * 200 },
    };
    setNodes((prev) => [...prev, newNode]);
    setSelectedNode(newNode.id);
  };

  const deleteNode = (nodeId: string) => {
    setNodes((prev) => prev.filter((n) => n.id !== nodeId));
    setEdges((prev) => prev.filter((e) => e.source !== nodeId && e.target !== nodeId));
    if (selectedNode === nodeId) setSelectedNode(null);
  };

  const handleMouseDown = (e: React.MouseEvent, nodeId: string) => {
    e.stopPropagation();
    const node = nodes.find((n) => n.id === nodeId);
    if (!node) return;

    setDraggingNode(nodeId);
    setOffset({ x: e.clientX - node.position.x - pan.x, y: e.clientY - node.position.y - pan.y });
    setSelectedNode(nodeId);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!draggingNode) return;
      setNodes((prev) =>
        prev.map((n) =>
          n.id === draggingNode ? { ...n, position: { x: e.clientX - offset.x - pan.x, y: e.clientY - offset.y - pan.y } } : n
        )
      );
    },
    [draggingNode, offset, pan]
  );

  const handleMouseUp = useCallback(() => {
    setDraggingNode(null);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const startConnection = (nodeId: string) => {
    setConnectingFrom(nodeId);
  };

  const completeConnection = (targetId: string) => {
    if (connectingFrom && connectingFrom !== targetId) {
      const exists = edges.some((e) => e.source === connectingFrom && e.target === targetId);
      if (!exists) {
        setEdges((prev) => [...prev, { id: `edge_${Date.now()}`, source: connectingFrom, target: targetId }]);
      }
    }
    setConnectingFrom(null);
  };

  const deleteEdge = (edgeId: string) => {
    setEdges((prev) => prev.filter((e) => e.id !== edgeId));
  };

  const saveFlow = async () => {
    const response = await fetch("/api/flows", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: flowName,
        startNodeId: nodes[0]?.id || "",
        nodes: nodes.map((n) => ({ ...n, connections: edges.filter((e) => e.source === n.id).map((e) => ({ targetNodeId: e.target, condition: e.condition })) })),
        isActive: false,
      }),
    });
    if (response.ok) {
      alert("Flow salvo com sucesso!");
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-[#0a0a0f]">
      {/* Sidebar - Node Palette */}
      <div className="w-64 border-r border-white/5 bg-[#0d0d14] flex flex-col">
        <div className="p-4 border-b border-white/5">
          <input
            value={flowName}
            onChange={(e) => setFlowName(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none"
            placeholder="Nome do flow"
          />
        </div>
        <div className="p-3 space-y-1 overflow-y-auto flex-1">
          <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider px-2 mb-2">Arrastar para adicionar</p>
          {NODE_TYPES.map((nt) => (
            <button
              key={nt.type}
              onClick={() => addNode(nt.type)}
              className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-white/5`}
            >
              <span className={`w-8 h-8 rounded-lg ${nt.color} flex items-center justify-center text-base border`}>
                {nt.icon}
              </span>
              {nt.label}
            </button>
          ))}
        </div>
        <div className="p-3 border-t border-white/5 space-y-2">
          <button
            onClick={saveFlow}
            className="w-full px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all"
          >
            💾 Salvar Flow
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div ref={canvasRef} className="flex-1 relative overflow-hidden cursor-crosshair" onClick={() => { setSelectedNode(null); setConnectingFrom(null); }}>
        {/* Grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1a1a2e_1px,transparent_1px)] [background-size:30px_30px] opacity-40" />

        {/* SVG Edges */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          {edges.map((edge) => {
            const sourceNode = nodes.find((n) => n.id === edge.source);
            const targetNode = nodes.find((n) => n.id === edge.target);
            if (!sourceNode || !targetNode) return null;

            const sx = sourceNode.position.x + pan.x + 100;
            const sy = sourceNode.position.y + pan.y + 40;
            const tx = targetNode.position.x + pan.x + 100;
            const ty = targetNode.position.y + pan.y;

            const midY = (sy + ty) / 2;

            return (
              <g key={edge.id}>
                <path
                  d={`M ${sx} ${sy} C ${sx} ${midY}, ${tx} ${midY}, ${tx} ${ty}`}
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="2"
                  className="opacity-60"
                />
                <circle
                  cx={(sx + tx) / 2}
                  cy={(sy + ty) / 2}
                  r="6"
                  fill="#0d0d14"
                  stroke="#6366f1"
                  strokeWidth="1.5"
                  className="pointer-events-auto cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
                  onClick={(e) => { e.stopPropagation(); deleteEdge(edge.id); }}
                />
              </g>
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => {
          const nt = nodeTypeLookup[node.type];
          return (
            <div
              key={node.id}
              className={`absolute w-[200px] rounded-xl border backdrop-blur-xl transition-shadow cursor-grab active:cursor-grabbing ${
                selectedNode === node.id ? "ring-2 ring-indigo-500 shadow-lg shadow-indigo-500/20" : ""
              } ${nt?.color || "bg-white/5 border-white/10"}`}
              style={{
                left: node.position.x + pan.x,
                top: node.position.y + pan.y,
                zIndex: selectedNode === node.id ? 10 : 2,
              }}
              onMouseDown={(e) => handleMouseDown(e, node.id)}
              onClick={(e) => { e.stopPropagation(); setSelectedNode(node.id); if (connectingFrom) completeConnection(node.id); }}
            >
              {/* Connection port (top) */}
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-700 border-2 border-zinc-500 hover:bg-indigo-500 hover:border-indigo-400 transition-all cursor-pointer z-10"
                onClick={(e) => { e.stopPropagation(); if (connectingFrom) completeConnection(node.id); }}
              />

              <div className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base">{nt?.icon || "📦"}</span>
                  <span className="text-xs font-medium text-white truncate flex-1">{node.label}</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); deleteNode(node.id); }}
                    className="text-zinc-500 hover:text-red-400 text-xs transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-[11px] text-zinc-400 truncate">
                  {getNodePreview(node)}
                </p>
              </div>

              {/* Connection port (bottom) */}
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-700 border-2 border-zinc-500 hover:bg-emerald-500 hover:border-emerald-400 transition-all cursor-pointer z-10"
                onClick={(e) => { e.stopPropagation(); startConnection(node.id); }}
              />
            </div>
          );
        })}

        {/* Connection mode indicator */}
        {connectingFrom && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-xl bg-indigo-600/90 text-white text-sm font-medium backdrop-blur-sm">
            Clique em um nó para conectar
          </div>
        )}
      </div>

      {/* Properties Panel */}
      {selectedNode && (
        <NodeProperties
          node={nodes.find((n) => n.id === selectedNode)!}
          onUpdate={(data) => setNodes((prev) => prev.map((n) => n.id === selectedNode ? { ...n, data: { ...n.data, ...data } } : n))}
          onUpdateLabel={(label) => setNodes((prev) => prev.map((n) => n.id === selectedNode ? { ...n, label } : n))}
          onClose={() => setSelectedNode(null)}
        />
      )}
    </div>
  );
}

function NodeProperties({ node, onUpdate, onUpdateLabel, onClose }: {
  node: FlowNode;
  onUpdate: (data: Record<string, unknown>) => void;
  onUpdateLabel: (label: string) => void;
  onClose: () => void;
}) {
  return (
    <div className="w-72 border-l border-white/5 bg-[#0d0d14] overflow-y-auto">
      <div className="p-4 border-b border-white/5 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">Propriedades</h3>
        <button onClick={onClose} className="text-zinc-500 hover:text-white text-sm">✕</button>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <label className="block text-xs text-zinc-400 mb-1">Nome</label>
          <input
            value={node.label}
            onChange={(e) => onUpdateLabel(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none"
          />
        </div>

        {node.type === "message" && (
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Mensagem</label>
            <textarea
              value={(node.data.text as string) || ""}
              onChange={(e) => onUpdate({ text: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none resize-none h-24"
              placeholder="Use {{variavel}} para variáveis"
            />
          </div>
        )}

        {node.type === "input" && (
          <>
            <div>
              <label className="block text-xs text-zinc-400 mb-1">Pergunta</label>
              <textarea
                value={(node.data.prompt as string) || ""}
                onChange={(e) => onUpdate({ prompt: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none resize-none h-20"
              />
            </div>
            <div>
              <label className="block text-xs text-zinc-400 mb-1">Salvar em variável</label>
              <input
                value={(node.data.variableName as string) || ""}
                onChange={(e) => onUpdate({ variableName: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none"
                placeholder="nome_cliente"
              />
            </div>
          </>
        )}

        {node.type === "condition" && (
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Campo para avaliar</label>
            <input
              value={(node.data.field as string) || "input"}
              onChange={(e) => onUpdate({ field: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none"
              placeholder="input ou nome_variavel"
            />
          </div>
        )}

        {node.type === "ai_agent" && (
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Prompt do Agente</label>
            <textarea
              value={(node.data.prompt as string) || ""}
              onChange={(e) => onUpdate({ prompt: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none resize-none h-24"
              placeholder="Responda como um atendente..."
            />
          </div>
        )}

        {node.type === "delay" && (
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Segundos</label>
            <input
              type="number"
              value={(node.data.seconds as number) || 1}
              onChange={(e) => onUpdate({ seconds: parseInt(e.target.value) || 1 })}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none"
              min="1"
              max="300"
            />
          </div>
        )}

        {node.type === "transfer" && (
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Mensagem de transferência</label>
            <input
              value={(node.data.message as string) || ""}
              onChange={(e) => onUpdate({ message: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none"
            />
          </div>
        )}

        {node.type === "tag" && (
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Nome da Tag</label>
            <input
              value={(node.data.tagName as string) || ""}
              onChange={(e) => onUpdate({ tagName: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none"
            />
          </div>
        )}

        {node.type === "api_call" && (
          <>
            <div>
              <label className="block text-xs text-zinc-400 mb-1">URL</label>
              <input
                value={(node.data.url as string) || ""}
                onChange={(e) => onUpdate({ url: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none"
                placeholder="https://api.example.com/data"
              />
            </div>
            <div>
              <label className="block text-xs text-zinc-400 mb-1">Método</label>
              <select
                value={(node.data.method as string) || "GET"}
                onChange={(e) => onUpdate({ method: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none"
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
              </select>
            </div>
          </>
        )}

        {node.type === "set_variable" && (
          <>
            <div>
              <label className="block text-xs text-zinc-400 mb-1">Nome da variável</label>
              <input
                value={(node.data.variableName as string) || ""}
                onChange={(e) => onUpdate({ variableName: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-zinc-400 mb-1">Valor</label>
              <input
                value={(node.data.value as string) || ""}
                onChange={(e) => onUpdate({ value: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none"
              />
            </div>
          </>
        )}

        <div className="pt-2 border-t border-white/5">
          <p className="text-[10px] text-zinc-600">ID: {node.id}</p>
          <p className="text-[10px] text-zinc-600">Tipo: {node.type}</p>
        </div>
      </div>
    </div>
  );
}

function getDefaultData(type: string): Record<string, unknown> {
  switch (type) {
    case "message": return { text: "" };
    case "condition": return { field: "input" };
    case "input": return { prompt: "", variableName: "" };
    case "ai_agent": return { prompt: "", agentId: "" };
    case "api_call": return { url: "", method: "GET" };
    case "delay": return { seconds: 3 };
    case "transfer": return { departmentId: "", message: "Transferindo..." };
    case "set_variable": return { variableName: "", value: "" };
    case "tag": return { tagName: "" };
    default: return {};
  }
}

function getNodePreview(node: FlowNode): string {
  switch (node.type) {
    case "message": return (node.data.text as string) || "Mensagem vazia";
    case "condition": return `Se ${node.data.field || "input"}...`;
    case "input": return (node.data.prompt as string) || "Aguardando input";
    case "ai_agent": return "Agente de IA";
    case "api_call": return (node.data.url as string) || "API Call";
    case "delay": return `Aguardar ${node.data.seconds || 1}s`;
    case "transfer": return "Transferir para atendente";
    case "set_variable": return `${node.data.variableName} = ${node.data.value}`;
    case "tag": return `Tag: ${node.data.tagName || "..."}`;
    default: return node.type;
  }
}
