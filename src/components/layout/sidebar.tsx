import Link from "next/link"
import { SquareCheckBig,LayoutDashboard,ListTodo,BookOpen,ChartColumn,Target ,NotebookPen } from "lucide-react"
export function Sidebar(){
    return(
  //aside -sidebar tag in HTML      
        <aside className=" flex flex-col w-64 h-screen bg-white border-r">
            <div className="flex text-3xl font-extrabold gap-2 items-center m-3">
                <SquareCheckBig x={18} className="bg-indigo-600 rounded-sm p-1  text-white"/>
                <h1>WorkLog</h1>
            </div>
            <hr></hr>
            <div className="flex flex-col mt-10 text-gray-600 text-lg ">
            <Link className="flex  gap-2 items-center mx-5 p-3 hover:bg-indigo-500 hover:rounded-2xl hover:text-white"
            href="/dashboard">
                <LayoutDashboard x={18}/>Dashboard
            </Link>
            <Link className="flex gap-2 items-center mx-5 p-3 hover:bg-indigo-500 hover:rounded-2xl hover:text-white"
            href="/tasks">
            <ListTodo x={18}/>Tasks
            </Link>
            <Link className="flex  gap-2 items-center mx-5 p-3 hover:bg-indigo-500 hover:rounded-2xl hover:text-white"
            href="/goal">
            <Target x={18}/>Goals
            </Link>
            <Link className="flex gap-2 items-center mx-5 p-3 hover:bg-indigo-500 hover:rounded-2xl hover:text-white"
               href="/journal">
            <NotebookPen x={18}/>Journal
            </Link>
            <Link className="flex gap-2 items-center mx-5 p-3 hover:bg-indigo-500 hover:rounded-2xl hover:text-white"
            href="/analytics">
            <BookOpen x={18}/>Analytics
            </Link>
            </div>
        </aside>
    )
}