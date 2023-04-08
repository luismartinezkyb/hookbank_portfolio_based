import React, {useState} from 'react'
import {close, logo, menu } from '../assets';
import {navLinks} from '../constants';


export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='hookbank' className='w-[124px] h-[32px]'/>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) =>(
          <li key={nav.id} className={`font-poppins`}>
            <a href={`#${nav.id}`} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'}` }>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle? close:menu} onClick={()=>setToggle(!toggle)} alt="menu"  className='w-[28px] h-[28px] object-contain'/>
        <div className={`${toggle? 'flex': 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

          {/**this is the menu for the sidebar in sm devices */}
          <ul className="list-none flex flex-col justify-end items-center flex-1 space-y-2">
            {navLinks.map((nav, index) =>(
              <li key={nav.id} className={`font-poppins`}>
                <a href={`#${nav.id}`} className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
