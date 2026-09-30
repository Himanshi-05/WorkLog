"use client"
import { Trash2 } from "lucide-react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { Goal } from "@/app/goal/page";


type CardProps = {
  goal: Goal;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
};


export default function GoalCard({ goal, onToggleComplete, onDelete ,onIncrease,onDecrease }: CardProps) {
  const percentage =goal.total>0? Math.round((goal.completedtask/goal.total)*100):0;
  

  return (
    <>
      <div className="max-w-2xl mx-auto flex flex-col mt-5 p-5 bg-gray-50 shadow-md border rounded-xl">

        <div className="flex items-start justify-between ">
          <div className="flex items-center gap-3">
            <input type="checkbox"
              className="h-4 w-4 cursor-pointer"
               checked={goal.completed}
            onChange={() => onToggleComplete(goal.id)}
            />
            <h3 className="text-lg font-semibold">{goal.title}</h3>
          </div>
          <button
          onClick={() => onDelete(goal.id)} 
          className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-500">
            <Trash2 size={18} />
          </button>
        </div>
         <div className="flex justify-between w-full mt-4">
        <button onClick={()=>onDecrease(goal.id)}>
            <Minus size={18}/>
        </button>
        <button onClick={()=>onIncrease(goal.id)}>
            <Plus size={18}/>
        </button>
        </div>
         <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
             <div className="h-2 rounded-full bg-indigo-500 transition-all duration-300" style={{width:`${percentage}%`}}></div>
        </div>
        <div className="flex justify-between px-2">
          <p className="mt-2 text-s text-slate-500">Progress : {goal.completedtask}/{goal.total} </p>
          <p className="mt-2 text-s text-slate-500"> {percentage}%</p>
        </div>
        
        <div className="mt-4 flex items-center gap-3 justify-between ">
         <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">
            {goal.category}
        </span>
        </div>
      </div>



    </>
  );
}
//