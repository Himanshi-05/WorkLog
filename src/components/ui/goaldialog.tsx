"use client";
import { X } from "lucide-react";
import { useState } from "react";
import { Goal } from "@/app/goal/page";

type DialogProps = {
  setOpenGoalDialog: (open: boolean) => void;
  setGoals: React.Dispatch<React.SetStateAction<Goal[]>>;
  goals: Goal[];
};

export default function GoalDialog({setOpenGoalDialog,setGoals,goals}: DialogProps) {
    
    
    const [title,setTitle] =useState("");
    const [total,setTotal] =useState("1");
    const [category,setCategory]=useState("Other");
     
    function handleCreateGoal(){
      if (!title.trim()) {
      alert("Task title is required");
      return;
    }
      const newGoal={
        id :crypto.randomUUID(),
        title,
        total,
        completedtask:0,
        category,
        completed:false,
      }
      setGoals([...goals, newGoal]);
      setOpenGoalDialog(false);
    }


  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center" onClick={()=>setOpenGoalDialog(false)}>
      <div className="mt-10 flex flex-col gap-5 bg-white w-full max-w-md py-10 rounded-2xl mx-2" onClick={(e)=>e.stopPropagation()}>
        <button className="place-self-end px-10" onClick={()=>setOpenGoalDialog(false)}><X size={20} /></button>
        <div className="px-20 ">
          <h3 className="text-2xl font-bold  ">Create Goal</h3>
          <form className="flex flex-col max-w-md py-10 gap-3">
            <h4>Goal Title*</h4>
            <input
              className="border rounded-lg px-3 py-2 bg-gray-100"
              placeholder="Goal Title"
              required
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              
            />
            <h4>Total tasks</h4>
            <input
              className="border rounded-lg px-3 py-2 bg-gray-100"
              type="number"
              min={1}
              value={total}
              onChange={(e)=>setTotal(e.target.value)}
            />
            <h4>Category</h4>
            <select className="border rounded-lg px-3 py-2 bg-gray-100"
            value={category}
              onChange={(e)=>setCategory(e.target.value)}>
              <option>Coding</option>
              <option>Learning</option>
              <option>Health</option>
              <option>Daily Routine</option>
              <option>Other</option>
            </select>
          </form>
         <button onClick={handleCreateGoal} className="text-center bg-[#4F46E5] text-md px-4 py-2 rounded-lg text-white font-bold ">Create Goal</button>
  
        </div>
      </div>
    </div>
  );
}