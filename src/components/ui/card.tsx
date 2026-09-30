"use client"
import { Trash2 } from "lucide-react";
import { Task } from "@/app/context/TaskContext";
type CardProps = {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function Card({ task, onToggleComplete, onDelete }: CardProps) {
  return (
    <>
      <div className="max-w-2xl mx-auto flex flex-col mt-5 p-5 bg-gray-50 shadow-md border rounded-xl">

        <div className="flex items-start justify-between ">
          <div className="flex items-center gap-3">
            <input type="checkbox"
              className="h-4 w-4 cursor-pointer"
               checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            />
            <h3 className="text-lg font-semibold">{task.title}</h3>
          </div>
          <button 
          onClick={() => onDelete(task.id)}
          className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-500">
            <Trash2 size={18} />
          </button>
        </div>
        <p className="mt-2 text-gray-600">{task.description}</p>
        <div className="mt-4 flex items-center gap-3 justify-between">
          <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">
            {task.category}
          </span>
          
          <span className="text-sm text-gray-500">
            {task.date}
          </span>
        </div>
      </div>



    </>
  );
}
//