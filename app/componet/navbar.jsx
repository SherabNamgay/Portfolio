'use client'
import {useState} from 'react'
export default function Navbar(){
    const [navlink, setNavlink]= useState(false)
    // console.log(navlink)
    return(
        <div>
            {navlink?
                <div className=''>
                    <div className='flex h-16 justify-between text-lg items-center p-4'>
                        <div className="w-1/3"><a href='#'> logo </a></div>
                        <button
                            className={`h-10 w-10 rounded pl-2 hover:bg-gray-800 ${navlink? 'bg-gray-700':''}`}
                            onClick={()=>setNavlink(!navlink)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className='h-full w-screen content-center pt-10'>
                        <ul className="text-center text-lg space-y-10">
                            <li> <a className='hover:text-blue-300' href="#">Home</a> </li>
                            <li> <a className='hover:text-blue-300' href="#">Projects</a> </li>
                            <li> <a className='hover:text-blue-300' href="#">Resume</a> </li>
                            <li> <a className='hover:text-blue-300' href="#">Contact</a> </li>
                        </ul>
                    </div>
                </div>
             :
                <div className="flex justify-between border-b border-gray-700 h-16 text-lg items-center p-4">
                    <div className="w-1/3"><a href='#'> logo </a></div>
                    <button
                        className="h-10 w-10 pl-2 rounded hover:bg-gray-800 sm:hidden"
                        onClick={()=>setNavlink(!navlink)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <ul className="flex space-x-auto hidden sm:contents">
                        <li> <a className='hover:text-blue-300' href="#">Home</a> </li>
                        <li> <a className='hover:text-blue-300' href="#">Projects</a> </li>
                        <li> <a className='hover:text-blue-300' href="#">Resume</a> </li>
                        <li> <a className='hover:text-blue-300' href="#">Contact</a> </li>
                    </ul>
                </div>
            }
        </div>
    )
}