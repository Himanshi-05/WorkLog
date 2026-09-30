"use client"
import React,{createContext ,useContext} from "react";
import { useLocalStorage } from "./JournalContext";

export type Goal = {
  id: string;
  title: string;
  total :number;
  completedtask :number;
  category: string;
  completed: boolean;
};
type GoalContextType={
    goals : Goal[];
    setGoals : React.Dispatch<React.SetStateAction<Goal[]>>;
    handleToggleComplete :(id:string) =>void;
    handleDeleteGoal: (id:string) =>void;
    increaseCompleted: (id: string) =>void;
    decreaseCompleted :(id: string) =>void;
}
const GoalContext = createContext<GoalContextType | undefined>(undefined);
export function GoalProvider({ children }: { children: React.ReactNode }) {

  const [goals, setGoals] = useLocalStorage<Goal[]>("worklog-goals", []);

   const handleToggleComplete=(id:string)=>{
       setGoals((prevGoals)=>prevGoals.map((goal)=>
        goal.id===id?{...goal,completed:!goal.completed}:goal
      )
    );
  };
   const handleDeleteGoal = (id: string) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };
    const increaseCompleted = (id: string) => {
  setGoals(prevGoals =>
    prevGoals.map(goal =>
      goal.id === id
        ? {
            ...goal,
            completedtask: Math.min(goal.completedtask + 1, goal.total),
          }
        : goal
    )
  );
};
 
  const decreaseCompleted = (id: string) => {
  setGoals(prevGoals =>
    prevGoals.map(goal =>
      goal.id === id
        ? {
            ...goal,
            completedtask: Math.max(goal.completedtask - 1, 0),
          }
        : goal
    )
  );
};

  return (
    <GoalContext.Provider value={{ goals, setGoals, handleToggleComplete, handleDeleteGoal,increaseCompleted,decreaseCompleted }}>
      {children}
    </GoalContext.Provider>
  );
}
export function useGoals() {
  const context = useContext(GoalContext);
  if (!context) {
    throw new Error("useGoals must be used inside GoalProvider");
  }
  return context;
}