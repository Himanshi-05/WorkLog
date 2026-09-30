'use client'
 
import { usePathname } from 'next/navigation'
 
export function Navbar() {
  const pathname = usePathname()
  return<div className='bg-white h-15'>
    <p  className="flex text-xl items-center  py-4"> {pathname}</p>
    <hr></hr>
  </div>

}