"use client";

import { AppLayout } from "@/components/layout/app-layout";
import Statecard from "@/components/ui/statecard";
import { useTasks } from "../context/TaskContext";
import { useGoals } from "../context/GoalContext";
import GoalsPieChart from "@/components/ui/GoalPieChart";
import WeeklyTaskBarChart from "@/components/ui/Weeklytaskbarchart ";

export default function AnalyticsPage() {
  const { tasks } = useTasks();
  const { goals } = useGoals();

  const totalTasks = tasks.length;
  const totalGoals = goals.length;

  const completedTasks = tasks.filter((task) => task.completed).length;
  const completedGoals = goals.filter((goal) => goal.completed).length;

  const activeTasks = totalTasks - completedTasks;
  const activeGoals = totalGoals - completedGoals;

  let completionRate = (completedTasks / totalTasks) * 100;
  if (totalTasks === 0) {
    completionRate = 0;
  }

  const goalChartData = Object.entries(
    goals.reduce<Record<string, number>>((acc, goal) => {
      const category = goal.category || "Other";
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {})
  ).map(([category, count]) => ({ category, count }));

  return (
    <AppLayout>
      <div>
        <div className="text-slate-900 font-extrabold text-3xl">ANALYTICS DASHBOARD</div>
        <p className="text-slate-400">
          Review automated completion metrics, compare weekly efforts, and track habit distribution.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 xl:grid-cols-4">
        <Statecard
          title="Task Completion"
          value={`${completedTasks}/${totalTasks}`}
          subtitle="Total tasks completed today"
        />

        <Statecard
          title="Active Goals"
          value={`${activeGoals}`}
          subtitle="Goals currently in progress"
        />

        <Statecard
          title="Completion Rate"
          value={`${completionRate}%`}
          subtitle="Overall productivity"
        />

        <Statecard
          title="Pending Tasks"
          value={`${activeTasks}`}
          subtitle="Tasks waiting to complete"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <GoalsPieChart data={goalChartData} title="Goals by Category" />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <WeeklyTaskBarChart tasks={tasks} title="This Week: Total vs Completed" />
        </div>
      </div>
    </AppLayout>
  );
}