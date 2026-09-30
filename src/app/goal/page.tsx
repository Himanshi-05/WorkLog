"use client";

import { AppLayout } from "@/components/layout/app-layout";
import { useGoals ,type Goal } from "../context/GoalContext";
import { useState } from "react";
import { Plus } from "lucide-react";
import GoalDialog from "@/components/ui/goaldialog";
import GoalCard from "@/components/ui/goalcard";



export default function GoalPage() {
  
  const [openGoalDialog,setOpenGoalDialog]=useState(false);
  const { goals, setGoals, handleToggleComplete, handleDeleteGoal,increaseCompleted,decreaseCompleted }=useGoals();
  const onClose=()=>{
    setOpenGoalDialog(false);
  }
 
  return (
    <AppLayout>
        <div >
     <div className="flex justify-between items-center  mx-8  ">
      <div className="flex flex-col px-2 py-2">
        <h2 className="text-5xl font-bold ">Goals </h2>
        <p>Set long-term objectives linked to categories .Progress increment automatically as task are completed </p>
      </div>
      <div className="flex items-center">
      <button  onClick={()=>setOpenGoalDialog(true)} className=" text-center bg-[#4F46E5] text-lg px-8 py-2 rounded-lg text-white font-bold flex"><Plus/>Create Goal</button>
      </div>
     </div>
     {openGoalDialog&&<GoalDialog setOpenGoalDialog={setOpenGoalDialog} setGoals={setGoals} goals={goals}/>}
      {goals.map((goal) => (
        <GoalCard
        key={goal.id}
        goal={goal}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDeleteGoal}
        onIncrease={increaseCompleted}
        onDecrease={decreaseCompleted}
        />
      ))
      }

    </div>
    </AppLayout>
  );
}