import Link from 'next/link'


export default function Navbar() {
    return(
        <div className="navbar w-[100%] bg-gray-900 text-white flex justify-between fixed p-4 z-50">
            <div className="logo px-32 text-2xl font-semibold">
                <h1><span className="text-blue-300">M.</span>Siddique</h1>
            </div>
            <div className="nav-options">
                <ul className="flex mr-32 text-lg font-medium gap-8">
                    <Link className="nav-items" href="#home"><li>Home</li></Link>
                    <Link className="nav-items" href="#about"><li>About</li></Link>
                    <Link className="nav-items" href="#services"><li>Service</li></Link>
                    <Link className="nav-items" href="#portfolio"><li>Portfolio</li></Link>
                    <Link className="nav-items" href="#contact"><li>Contact</li></Link>
                </ul>
            </div>
        </div>
    )
}