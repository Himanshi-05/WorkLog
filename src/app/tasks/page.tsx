"use client";

import { AppLayout } from "@/components/layout/app-layout";
import { useTasks, type Task } from "@/app/context/TaskContext";
import { useState } from "react";
import { Plus } from "lucide-react";
import Dialog from "@/components/ui/dialog";
import Card from "@/components/ui/card";

export default function TasksPage() {
  
  const [openDialog,setOpenDialog]=useState(false);
  const { tasks, setTasks, handleToggleComplete, handleDeleteTask } = useTasks();
  const onClose=()=>{
    setOpenDialog(false);
  }
  
  return (
    <AppLayout>
        <div >
     <div className="flex justify-between items-center  mx-8  ">
      <div className="flex flex-col px-2 py-2">
        <h2 className="text-5xl font-bold ">Task Management </h2>
        <p>Plan daily work, set priorities, and monitor consistency.</p>
      </div>
      <div className="flex items-center">
      <button  onClick={()=>setOpenDialog(true)} className=" text-center bg-[#4F46E5] text-lg px-8 py-2 rounded-lg text-white font-bold flex"><Plus/>Add Task</button>
      </div>
     </div>
     {openDialog&&<Dialog setOpenDialog={setOpenDialog} setTasks={setTasks} tasks={tasks}/>}
      {tasks.map((task) => (
        <Card 
        key={task.id}
        task={task}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDeleteTask}
        />
      ))
      }

    </div>
    </AppLayout>
  );
}
