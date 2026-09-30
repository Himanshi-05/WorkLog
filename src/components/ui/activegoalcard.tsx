"use client"
import { useGoals } from "@/app/context/GoalContext"

export default function ActiveGoalCard() {
     const {goals}=useGoals();
     const activeGoals=goals.slice(0,3);  
      
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col gap-2 mt-4 px-6 py-6 space-y-3" >
      <h1 className="text-slate-900 text-xl font-bold pb-4">Active Goals</h1>
      {
        goals.length===0?(
             <p className="text-xl text-slate-600">No goal active currently</p>
        ):(
           activeGoals.map((goal)=>{
               const percentage =goal.total>0? Math.round((goal.completedtask/goal.total)*100):0;

            return(
              <div 
              key={goal.id}
              className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3">
                  <div className="flex justify-between px-2">
                     <h3 className="text-lg font-semibold">{goal.title}</h3>
                     <p className="mt-2 text-sm text-slate-500"> {percentage}%</p>
                </div>
                <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">
                         {goal.category}
                 </span>
                  <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 w-fit rounded-full bg-indigo-500 transition-all duration-300" style={{width:`${percentage}%`}}></div>
                  </div>
            </div>

            );
           })
        )

      }
      
    </div>
  )
}
