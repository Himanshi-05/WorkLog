"use client"
import React,{ createContext, useContext } from "react";
import { useLocalStorage } from "./JournalContext";

export type Task = {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  completed: boolean;
};
type TaskContextType = {
    tasks : Task[];
    setTasks : React.Dispatch<React.SetStateAction<Task[]>>;
    handleToggleComplete :(id:string) =>void;
    handleDeleteTask: (id:string) =>void;
}
const TaskContext = createContext<TaskContextType | undefined>(undefined);
export function TaskProvider({ children }: { children: React.ReactNode }) {

  const [tasks, setTasks] = useLocalStorage<Task[]>("worklog-tasks", []);

  const handleToggleComplete = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, handleToggleComplete, handleDeleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used inside TaskProvider");
  }
  return context;
}