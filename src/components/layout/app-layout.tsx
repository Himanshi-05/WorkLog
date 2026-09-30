import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";




export function AppLayout({children,}: {children: React.ReactNode;}){
    return(
        
        <div className="flex min-h-screen bg-slate-50">
            
            <Sidebar/>
            <main className="flex-1">
                <Navbar />
                
                <div className="p-6">
                    {children}
                </div>
                
            </main>

        </div>
    )
}

/* 
{children,}: {children: React.ReactNode;}
Here this is typescript so usually we pass props i.e. here {children} 
And in this typescript also checking "The children prop should contain valid React content"



*/