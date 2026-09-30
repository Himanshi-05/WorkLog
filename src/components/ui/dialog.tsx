"use client";
import { X } from "lucide-react";
import { Task } from "@/app/tasks/page";
import { useState } from "react";

type DialogProps = {
  setOpenDialog: (open: boolean) => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  tasks: Task[];
};
export default function Dialog({ setOpenDialog, setTasks, tasks }: DialogProps ) {


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString("en-CA"));
  const [category, setCategory] = useState("Other");

  function handleCreateTask() {

    if (!title.trim()) {
      alert("Task title is required");
      return;
    }
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      date,
      category,
      completed:false,
    }
    setTasks([...tasks, newTask]);
    setOpenDialog(false);
  }


  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center" onClick={() => setOpenDialog(false)}>
      <div className="mt-10 flex flex-col gap-5 bg-white w-full max-w-md py-10 rounded-2xl mx-2" onClick={(e) => e.stopPropagation()}>
        <button className="place-self-end px-10" onClick={() => setOpenDialog(false)}><X size={20} /></button>
        <div className="px-20 ">
          <h3 className="text-2xl font-bold  ">Create Task</h3>
          <form className="flex flex-col max-w-md py-10 gap-3">
            <h4>Task Title*</h4>
            <input
              className="border rounded-lg px-3 py-2 bg-gray-100"
              placeholder="Task Title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}

            />
            <h4>Task Description</h4>
            <textarea
              className="border rounded-lg px-3 py-2 min-h-24 bg-gray-100 "
              placeholder="Tasks Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <h4>Date</h4>
            <input
              className="border rounded-lg px-3 py-2 bg-gray-100"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <h4>Category</h4>
            <select className="border rounded-lg px-3 py-2 bg-gray-100"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Coding">Coding</option>
              <option value="Learning">Learning</option>
              <option value="Health">Health</option>
              <option value="Daily Routine">Daily Routine</option>
              <option value="Other">Other</option>
            </select>
          </form>
          <button onClick={handleCreateTask} className="text-center bg-[#4F46E5] text-md px-4 py-2 rounded-lg text-white font-bold ">Create Task</button>

        </div>
      </div>
    </div>
  );
}