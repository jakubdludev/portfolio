
import { CodeIcon, MenuIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [menuClosed, setMenuClosed] = useState(true)

  return (
    <div className="w-full mx-auto  h-10 border-b select-none bg-gray-100 text-gray-600 sticky left-0 top-0 z-40">
        <div className="container flex  max-w-xl mx-auto">
         <div className={`${menuClosed ? '-translate-x-0' : ' -translate-x-52 transition-transform transform sm:-translate-x-0'} flex translate transition-all h-10 ml-3 my-auto border-gray-400`}>
            <CodeIcon /> <div className={`my-auto ml-3 mx-auto text-xl`}>jakubdlu.dev</div>
        </div>
        <div className={`${menuClosed ? 'my-auto ml-auto mr-5 flex' : 'mr-auto my-auto sm:mr-2 sm:ml-auto flex '}`}>
            <div className={`${menuClosed ? ' flex' : 'flex -translate-x-40 sm:-translate-x-0'} my-auto transition-transform transform ` } >
            <Link to="/" className={` ${menuClosed ? 'hidden' : '' } sm:flex mx-2 hover:text-gray-500`}>Home</Link>
            <Link to="/portfolio" className={` ${menuClosed ? 'hidden' : '' } sm:flex mx-2 hover:text-gray-500`}>Portfolio</Link>
            <Link to="/contact" className={` ${menuClosed ? 'hidden' : '' } sm:flex mx-2 hover:text-gray-500`}>Contact</Link>
            {/* <a href="" className={` ${menuClosed ? 'hidden' : '' } sm:flex mx-2 hover:text-gray-500`}>Portfolio</a>
            <a href="" className={` ${menuClosed ? 'hidden' : '' } sm:flex mx-2 hover:text-gray-500`}>Contact</a> */}
            </div>
        </div>
        <div onClick={()=>setMenuClosed(!menuClosed)} className="h-8 w-8 absolute bg-gray-100 right-1 top-1 sm:hidden">
                { !menuClosed ? <XIcon /> : <MenuIcon />}
            </div>
        </div>
    </div>
  )
}
