"use client";
import { AppLayout } from "@/components/layout/app-layout";
import Log from "@/components/ui/log";
import LogCard from "@/components/ui/log-card";
import { LogEntry } from "@/components/ui/log";
import { useState } from "react";
import { useLocalStorage } from "../context/JournalContext";


export default function JournalPage() {
  const [logs, setLogs, loaded] = useLocalStorage<LogEntry[]>("journal-logs", []);
  const [view, setView] = useState<"list" | "form">("list");

  function handleSave(entry: LogEntry) {
    setLogs((prev) => [entry, ...prev]);
    setView("list");
  }

  function handleDelete(id: string) {
    setLogs((prev) => prev.filter((log) => log.id !== id));
  }

  return (
    <AppLayout>
      <div className="flex justify-between items-start">
        <div>
          <div className="text-slate-900 font-extrabold text-5xl">Journal</div>
          <p className="text-slate-400 mb-5">
            Maintain a daily journal of accomplishments, learnings, reflections and task done.
          </p>
        </div>

        {view === "list" && (
          <button
            onClick={() => setView("form")}
            className="bg-[#4F46E5] text-white px-4 py-2 rounded-lg font-mono h-fit"
          >
            + New Log
          </button>
        )}
      </div>

      {view === "form" ? (
        <Log onSave={handleSave} onCancel={() => setView("list")} />
      ) : !loaded ? (
        <p className="text-slate-400">Loading...</p>
      ) : (
        <div className="flex flex-col gap-4">
          {logs.length === 0 ? (
            <p className="text-slate-400">No logs yet. Add your first one.</p>
          ) : (
            logs.map((entry) => (
              <LogCard key={entry.id} entry={entry} onDelete={handleDelete} />
            ))
          )}
        </div>
      )}
    </AppLayout>
  );
}