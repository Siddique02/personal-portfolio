"use client"
import {useState} from 'react'
import Link from 'next/link'
import Dropdown from '@/app/components/svgs/dropDown'


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className="navbar w-[100%] bg-gray-900 text-white flex justify-between fixed p-4 px-24 gap-5 z-50">
            <div className="logo text-2xl font-semibold">
                <h1><span className="text-blue-300">M.</span>Siddique</h1>
            </div>

            <div className="nav-options">
                <ul className="nav-ul flex text-lg font-medium gap-8">
                    <Link className="nav-items" href="#home"><li>Home</li></Link>
                    <Link className="nav-items" href="#about"><li>About</li></Link>
                    <Link className="nav-items" href="#services"><li>Service</li></Link>
                    <Link className="nav-items" href="#portfolio"><li>Portfolio</li></Link>
                    <Link className="nav-items" href="#contact"><li>Contact</li></Link>
                </ul>
            </div>

            

            {/* For small devices */}

            {isOpen && (
                <div className="dropdown absolute bg-gray-900 w-52 right-8 top-20 rounded-lg hidden px-4 py-4">
                    <ul className="drop-ul flex text-lg font-medium gap-8">
                        <Link className="drop-items" href="#home"><li>Home</li></Link>
                        <Link className="drop-items" href="#about"><li>About</li></Link>
                        <Link className="drop-items" href="#services"><li>Service</li></Link>
                        <Link className="drop-items" href="#portfolio"><li>Portfolio</li></Link>
                        <Link className="drop-items" href="#contact"><li>Contact</li></Link>
                    </ul>
                </div>
            )}

            <button className="drop-btn hidden" onClick={()=>setIsOpen(!isOpen)}><Dropdown/></button>

        </div>
    )
}