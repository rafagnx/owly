'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export interface PauseStatusProps {
  memberId: string;
  onChange: (action: "pause" | "resume") => void;
}

/**
 * Display current pause status of a team member and allow toggling.
 * Emits POST /api/tickets/pause with {ticketId, action} where action is "pause" or "resume".
 */
export default function PauseStatus({ memberId, onChange }: PauseStatusProps) {
  const router = useRouter();

  // Simple mock status – replace with real data fetching if needed
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch current pause state from API (could be extended)
    async function fetchStatus() {
      try {
        const res = await fetch(`/api/members/${memberId}/status`);
        const data = await res.json();
        setIsPaused(data.isOnPause || false);
      } catch (e) {
        console.error("Failed to fetch pause status", e);
      }
    }
    fetchStatus();
  }, [memberId]);

  const handleToggle = async (action: "pause" | "resume") => {
    setLoading(true);
    try {
      const res = await fetch("/api/pause", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ticketId: memberId, action }), // using ticketId as placeholder for memberId
      });
      const json = await res.json();
      if (res.ok) {
        setIsPaused(action === "pause");
        onChange(action);
      } else {
        alert(json.error || "Operation failed");
      }
    } catch (e) {
      console.error(e);
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {isPaused ? (
        <span className="text-green-600">▶️ Active</span>
      ) : (
        <span className="text-gray-600">⏸️ Paused</span>
      )}
      {loading ? (
        <span className="animate-pulse text-sm text-gray-400" />
      ) : (
        <button
          onClick={() => handleToggle(isPaused ? "resume" : "pause")}
          className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
      )}
    </div>
  );
}