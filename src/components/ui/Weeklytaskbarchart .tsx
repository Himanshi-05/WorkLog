"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Task } from "@/app/context/TaskContext";
import { getWeeklyTaskStats } from "@/lib/getWeeklyTaskStats";

const CREATED_COLOR = "#A5B4FC";
const COMPLETED_COLOR = "#4338CA";

type Props = {
  tasks: Task[];
  title?: string;
};

export default function WeeklyTaskBarChart({
  tasks,
  title = "Daily Progress (Last 7 Days)",
}: Props) {
  const data = getWeeklyTaskStats(tasks);
  const hasData = data.some((d) => d.created > 0 || d.completed > 0);

  return (
    <div style={{ width: "100%", maxWidth: 640, margin: "0 auto" }}>
      {title && (
        <h2 style={{ textAlign: "center", marginBottom: 8, fontSize: 18, fontWeight: 600 }}>
          {title}
        </h2>
      )}

      {!hasData ? (
        <p style={{ textAlign: "center", color: "#737373" }}>
          No tasks yet this week.
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis dataKey="day" tick={{ fontSize: 13 }} />
            <YAxis allowDecimals={false} tick={{ fontSize: 13 }} />
            <Tooltip
              formatter={(value: number, name: string) => [
                value,
                name === "created" ? "Total" : "Completed",
              ]}
              labelFormatter={(label, payload) => payload?.[0]?.payload?.date ?? label}
            />
            <Legend formatter={(value) => (value === "created" ? "Total" : "Completed")} />
            <Line
              type="monotone"
              dataKey="created"
              stroke={CREATED_COLOR}
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="completed"
              stroke={COMPLETED_COLOR}
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
