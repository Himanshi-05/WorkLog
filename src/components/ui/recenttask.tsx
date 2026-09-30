"use client"

import { useTasks } from "@/app/context/TaskContext";

export default function RecentTask() {
    const {tasks}=useTasks();
   const recentTask= tasks.slice(0,5);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white flex-col mt-4 px-6 py-6 space-y-3 ">
      <h1 className="text-slate-900 text-xl font-bold pb-4">Recent Task</h1>
        {
        tasks.length===0?(
             <p className="text-xl text-slate-600">No tasks available</p>
         ):(
         recentTask.map((task)=>{
            return(
               
                <div 
                 key={task.id}
                 className="rounded-xl border border-slate-200 flex gap-4 p-4 text-base font-normal text-slate-800  items-center">
              <input 
                 type="checkbox"
                 className="h-4 w-4 "
                  checked={task.completed}
                  disabled
             />
             <p>{task.title}</p> 
             </div> 
            );    
           }
         )
      )
      }
    </div>

  )
}


