"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Fixed color per category so colors stay consistent even if data order changes
// All shades of Tailwind's indigo palette (indigo-300 through indigo-900)
const CATEGORY_COLORS = {
  Coding: "#3730A3", // indigo-800
  Learning: "#4338CA", // indigo-700
  Health: "#4F46E5", // indigo-600
  "Daily Routine": "#6366F1", // indigo-500
  Other: "#A5B4FC", // indigo-300
};

// Default sample data — replace `data` prop with your real counts:
// [{ category: "Coding", count: 12 }, ...]
const DEFAULT_DATA = [
  { category: "Coding", count: 12 },
  { category: "Learning", count: 8 },
  { category: "Health", count: 5 },
  { category: "Daily Routine", count: 10 },
  { category: "Other", count: 3 },
];

function renderLabel({ category, percent }:any) {
  return `${category}: ${(percent * 100).toFixed(0)}%`;
}

export default function GoalsPieChart({ data = DEFAULT_DATA, title = "Goals by Category" }) {
  const total = data.reduce((sum, d) => sum + d.count, 0);

  return (
    <div style={{ width: "100%", maxWidth: 480, margin: "0 auto" }}>
      {title && (
        <h2 style={{ textAlign: "center", marginBottom: 8, fontSize: 18, fontWeight: 600 }}>
          {title}
        </h2>
      )}

      {total === 0 ? (
        <p style={{ textAlign: "center", color: "#737373" }}>No goals yet.</p>
      ) : (
        <ResponsiveContainer width="100%" height={360}>
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={60}
              paddingAngle={2}
              label={renderLabel}
            >
              {data.map((entry) => (
                <Cell
                  key={entry.category}
                  fill={CATEGORY_COLORS[entry.category] || "#818CF8"}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value} goal${value === 1 ? "" : "s"}`, name]}
            />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
