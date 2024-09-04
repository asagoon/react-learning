import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from 'react-scroll';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      content:  'Home',
      href: '/',
    },
    {
      id: 2,
      content:  'About',
      href: '/about',
    },
    {
      id: 3,
      content:  'Projects',
      href: '/projects',
    },
    {
      id: 4,
      content:  'Skills',
      href: '/skills',
    },
    {
      id: 5,
      content:  'Contact',
      href: '/contact',
    },
  ]

  return (
    <nav>
      <header className='text-gray-700 font-medium border-b border-gray'>
      <div className='container flex mx-auto p-5 md:flex-row'>
        <Link to="/" className='font-medium text-gray-900'>
          <span className='text-3xl ml-10 font-bold font-signature'>Yuta Asai</span>
        </Link>
        
        <ul className='hidden md:flex ml-auto text-base'>
          {links.map(({id, content, href}) => (
            <li 
            key={id}
            className='cursor-pointer mr-5 hover:text-blue-400 duration-200'>
              <Link to={href} smooth duration={500}>{content}</Link>
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
        <ul className='flex flex-col justify-center items-center absolute md:opacity-0
        top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-300 to-slate-400 text-4xl text-gray-500'>
          {links.map(({id, content, href}) => (
            <li 
            key={id}
            className='px-4 cursor-pointer capitalize py-6 hover:text-blue-400 duration-200'>
              <Link onClick={() => 
                setNav(!nav)} 
                to={href} 
                smooth 
                duration={500}
                >
                  {content}
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