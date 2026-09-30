"use client"

import { AppLayout } from "@/components/layout/app-layout";
import Link from "next/link";
import { Plus } from "lucide-react";
import Statecard from "@/components/ui/statecard";
import {useTasks } from "../context/TaskContext";
import { useGoals } from "../context/GoalContext";
import RecentTask from "@/components/ui/recenttask";
import ActiveGoalCard from "@/components/ui/activegoalcard";

export default function Dashboard() {

  const { tasks } = useTasks();
   const { goals } = useGoals();

   
  const totalTasks = tasks.length;
  const totalGoals=goals.length;


const completedTasks = tasks.filter(
  task => task.completed
).length;

const completedGoals = goals.filter(
  goal => goal.completed
).length;

const activeTasks= totalTasks-completedTasks;
const activeGoals =totalGoals-completedGoals;

let completionRate=(completedTasks/totalTasks)*100;
if(totalTasks==0){
  completionRate=0;
}
  return(
  <AppLayout>
    {/****Header***/}
     <header className="rounded-2xl border border-slate-200 bg-white  shadow-xs">
        <div className="flex justify-between items-center py-6 px-8">
            <div className="flex flex-col">
                 <p className="text-3xl font-bold text-slate-900">Welcome !</p>
                 <p className="text-md text-slate-400">Today's log</p>
            </div>
           <div className="flex gap-4 font-semibold text-white">
            <Link
            className="rounded-xl bg-[#4F46E5] flex gap-1 items-center px-4 py-3  "
            href="/tasks">
            <Plus/> New Task
            </Link>
            <Link
            className="rounded-xl bg-[#4F46E5] flex gap-1 items-center px-4 py-3 text-white "
            href="/goal">
            <Plus/> New Goal
            </Link>
           </div>
        </div>       
     </header>

     {/********** Boxes  ***********/}
      <div className="grid grid-cols-4 gap-4 mt-3">
           <Statecard title="Task Completion" 
                       value={`${completedTasks}/${totalTasks}`}
                       subtitle="Total tasks completed today"/>
       
           <Statecard title="Active Goals" 
                       value={`${activeGoals}`}
                       subtitle="Goals currently in progress"/>   
     
         <Statecard title="Completion Rate" 
                       value={`${completionRate}%`}
                       subtitle="Overall productivity"/>             
     
            <Statecard title="Pending Tasks" 
                       value={`${activeTasks}`}
                       subtitle="Tasks waiting to complete"/>
          </div>

         { /************Recent Task ***********/}       
         <RecentTask/>
   
         {/************* Active Goals **********/}
          <ActiveGoalCard/>
         
  </AppLayout>
  );
}