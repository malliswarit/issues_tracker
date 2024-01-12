'use client';
import Link from 'next/link';
import React from 'react';
import classnames from 'classnames';
import { usePathname } from 'next/navigation';
import { AiFillBug } from "react-icons/ai";
function NavBar() {
    const currentPath = usePathname();
    const links = [
        {label:'Dashboard', href:"/"},
        {label:'Issues', href:"/issues"}
    ]
  return (
    <>
 
    <nav className='flex space-x-6 border-b px-10 mb-5 h-14 items-center'>
        <Link href ="/"><AiFillBug /></Link>
        <ul className='flex space-x-6'>
            {links.map((link) => {
                return(
                    <li key={link.href} >
                    <Link href={link.href} className={classnames({
                        'text-zinc-900':link.href===currentPath,
                        'text-zinc-500':link.href !== currentPath,
                        'hover:text-zinc-700 transition-colors':true
                    })}>{link.label}</Link>
                </li>
                )                
            })}          
        </ul>
    </nav>
    </>
  )
}

export default NavBar