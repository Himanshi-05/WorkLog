import "./globals.css";
import { TaskProvider } from "@/app/context/TaskContext";
import { GoalProvider } from "./context/GoalContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          <GoalProvider>
        {children}
        </GoalProvider>
        </TaskProvider>
      </body>
    </html>
  );
}