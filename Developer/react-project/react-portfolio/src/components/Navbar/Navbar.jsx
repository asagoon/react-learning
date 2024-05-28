import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link:  'Home'
    },
    {
      id: 2,
      link:  'About'
    },
    {
      id: 3,
      link:  'Projects'
    },
    {
      id: 4,
      link:  'Skills'
    },
    {
      id: 5,
      link:  'Contact'
    },
  ]

  return (
    <nav>
      <header className='text-gray-700 border-b border-gray'>
      <div className='container flex mx-auto p-5 md:flex-row'>
        <a href="/" className='font-medium text-gray-900'>
          <span className='text-2xl ml-10 font-bold font-signature'>Yuta Asai</span>
        </a>
        
        <ul className='hidden md:flex ml-auto text-base'>
          {links.map(({id, link}) => (
            <li 
            key={id}
            href="#home" className='cursor-pointer mr-5 hover:text-blue-400 duration-200'>
              <Link to={link} smooth duration={500}>{link}</Link>
              </li>
          ))}
          {/* <a href="#home" className='mr-5 hover:text-blue-400 duration-200'>Home</a>
          <a href="#about" className='mr-5 hover:text-blue-400 duration-200'>About</a>
          <a href="#projects" className='mr-5 hover:text-blue-400 duration-200'>Projects</a>
          <a href="#skills" className='hover:text-blue-400 duration-200'>Skills</a> */}
        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 ml-auto md:hidden'>
          {nav ? <CloseIcon />: <MenuIcon />}
        </div>

        {nav && (
        <ul className='flex flex-col justify-center items-center absolute
        top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-300 to-slate-400 text-4xl text-gray-500'>
          {links.map(({id, link}) => (
            <li 
            key={id}
            href="#home" className='px-4 cursor-pointer capitalize py-6 hover:text-blue-400 duration-200'>
              <Link onClick={() => 
                setNav(!nav)} 
                to={link} 
                smooth 
                duration={500}>
                  {link}
                  </Link>
              </li>
          ))}
        </ul>
      )}
        
        </div>
    </header>
    </nav>
  )
}

export default Navbar