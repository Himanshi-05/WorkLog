//"use client"-No need because there is. no interactivity here from client
interface StatecardProps {
  title: string;
  value: string | number;
  subtitle: string;
}

export default function Statecard({ title, value, subtitle }:StatecardProps){
    return(
        <>
       <div className="rounded-2xl border border-slate-200 bg-white mt-6 px-4 py-6 ">
        <div className="flex justify-between items-start">
         <h3 className="font-bold text-slate-500 uppercase">{title}</h3>
        </div>
        <div className="mt-6">
            <h2 className="text-3xl font-bold text-slate-900">{value}</h2>
            <p className=" text-slate-500">{subtitle}</p>
        </div>
       </div>
    
       </>
    );
}