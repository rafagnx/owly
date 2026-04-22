"use client";

import { useState, useEffect } from "react";

interface MemberStatus {
  id: string;
  name: string;
  isAvailable: boolean;
  isOnPause: boolean;
  pauseReason: string | null;
}

export default function AgentPausePanel() {
  const [members, setMembers] = useState<MemberStatus[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/pause", { credentials: "include" })
      .then((r) => r.json())
      .then(setMembers)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleToggle = async (id: string, currentlyPaused: boolean) => {
    setLoading(true);
    await fetch("/api/pause", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        memberId: id,
        action: currentlyPaused ? "resume" : "pause",
      }),
    });
    setLoading(false);
    window.location.reload();
  };

  if (loading) return <div className="p-4 text-gray-500">Loading agents...</div>;

  return (
    <div className="space-y-2 p-4">
      <h2 className="text-lg font-semibold">Agent Pause Status</h2>
      {members.length === 0 && <p className="text-gray-500">No team members found.</p>}
      {members.map((m) => (
        <div
          key={m.id}
          className={`flex items-center justify-between rounded-lg border p-3 ${
            m.isOnPause ? "border-yellow-300 bg-yellow-50" : "border-green-300 bg-green-50"
          }`}
        >
          <div>
            <p className="font-medium">{m.name}</p>
            <p className="text-sm text-gray-600">
              {m.isOnPause ? `Paused: ${m.pauseReason || "Manual"}` : "Active"}
            </p>
          </div>
          <button
            onClick={() => handleToggle(m.id, m.isOnPause)}
            className={`rounded px-3 py-1 text-sm text-white ${
              m.isOnPause ? "bg-green-600 hover:bg-green-700" : "bg-yellow-600 hover:bg-yellow-700"
            }`}
            disabled={loading}
          >
            {m.isOnPause ? "Resume" : "Pause"}
          </button>
        </div>
      ))}
    </div>
  );
}