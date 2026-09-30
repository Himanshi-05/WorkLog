"use client";
import { useState } from "react";
import { BookOpen } from "lucide-react";


export interface LogEntry {
  id: string;
  date: string;
  description: string;
  accomplishments: string;
  learning: string;
  reflection: string;
}

interface LogProps {
  onSave: (entry: LogEntry) => void;
  onCancel: () => void;
}

export default function Log({ onSave, onCancel }: LogProps) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [accomplishments, setAccomplishments] = useState("");
  const [learning, setLearning] = useState("");
  const [reflection, setReflection] = useState("");

  function handleSubmit() {
    if (!date || !description) return;

    onSave({
      id: crypto.randomUUID(),
      date,
      description,
      accomplishments,
      learning,
      reflection,
    });
  }

  return (
    <div className="border rounded-2xl shadow-2xl bg-white p-6">
      <div className="header flex gap-4 py-3 items-center">
        <BookOpen />
        <h2 className="text-xl font-extrabold">Log your Day</h2>
      </div>

      <div className="info p-3 flex flex-col gap-5">
        <div className="data flex flex-col">
          <label htmlFor="date">Log Date</label>
          <input
            id="date"
            className="border rounded-lg px-3 py-2 bg-gray-100"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="desc flex flex-col">
          <label htmlFor="desc">What did you work on today?</label>
          <textarea
            id="desc"
            className="border rounded-lg px-3 py-2 min-h-24 bg-gray-100"
            placeholder="Describe your daily technical work"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="reflection flex flex-col gap-5">
          <div className="accomplishment flex flex-col">
            <label htmlFor="accomplishment">Key Accomplishments</label>
            <textarea
              id="accomplishment"
              className="border rounded-lg px-3 py-2 bg-gray-100"
              placeholder="List the tasks you completed."
              value={accomplishments}
              onChange={(e) => setAccomplishments(e.target.value)}
            />
          </div>
          <div className="learning flex flex-col">
            <label htmlFor="learning">Track learning & progress</label>
            <textarea
              id="learning"
              className="border rounded-lg px-3 py-2 bg-gray-100"
              placeholder="What new concept, technology, or lesson did you learn?"
              value={learning}
              onChange={(e) => setLearning(e.target.value)}
            />
          </div>
          <div className="reflection flex flex-col">
            <label htmlFor="obstacles">Reflection & Obstacles</label>
            <textarea
              id="obstacles"
              className="border rounded-lg px-3 py-2 bg-gray-100"
              placeholder="What challenges did you face? How will you improve tomorrow?"
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            className="text-center bg-[#4F46E5] px-4 py-2 rounded-lg text-white font-mono text-lg"
          >
            + Save Daily Log
          </button> 
          <button
            onClick={onCancel}
            className="text-center px-4 py-2 rounded-lg text-slate-600 font-mono text-lg border"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}