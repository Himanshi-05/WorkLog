"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LogEntry } from "@/components/ui/log";

interface LogCardProps {
  entry: LogEntry;
  onDelete: (id: string) => void;
}

export default function LogCard({ entry, onDelete }: LogCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-2xl shadow bg-white p-4">
      <button
        className="w-full flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <div className="text-left">
          <p className="font-bold text-slate-900">{entry.date}</p>
          <p className="text-slate-400 text-sm line-clamp-1">
            {entry.description}
          </p>
        </div>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>

      {open && (
        <div className="mt-4 flex flex-col gap-3 text-sm">
          <div>
            <p className="font-semibold text-slate-700">Accomplishments</p>
            <p className="text-slate-500">{entry.accomplishments || "—"}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700">Learning</p>
            <p className="text-slate-500">{entry.learning || "—"}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700">Reflection</p>
            <p className="text-slate-500">{entry.reflection || "—"}</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(entry.id);
            }}
            className="text-red-500 text-sm self-start mt-2"
          >
            Delete entry
          </button>
        </div>
      )}
    </div>
  );
}