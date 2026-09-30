import { Task } from "@/app/context/TaskContext";

export type DayStat = {
  day: string;
  date: string;
  created: number;
  completed: number;
};

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function formatLocalDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function toDateKey(dateInput: string) {
  const trimmed = dateInput.trim();
  if (!trimmed) return "";

  const date = new Date(`${trimmed}T12:00:00`);
  if (Number.isNaN(date.getTime())) return "";

  return formatLocalDateKey(date);
}

function startOfDay(date: Date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Aggregates tasks into the last 7 calendar days, showing each day separately.
 */
export function getWeeklyTaskStats(
  tasks: Task[],
  referenceDate: Date = new Date()
): DayStat[] {
  const today = startOfDay(referenceDate);

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - i));
    return d;
  });

  const stats: DayStat[] = days.map((d) => ({
    day: DAY_LABELS[d.getDay()],
    date: formatLocalDateKey(d),
    created: 0,
    completed: 0,
  }));

  const dateIndex = new Map(stats.map((s, i) => [s.date, i]));

  for (const task of tasks) {
    if (!task.date) continue;
    const key = toDateKey(task.date);
    const idx = dateIndex.get(key);
    if (idx === undefined) continue;

    stats[idx].created += 1;
    if (task.completed) stats[idx].completed += 1;
  }

  return stats;
}