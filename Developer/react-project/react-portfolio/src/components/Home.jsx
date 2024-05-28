import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='Home' className='h-screen w-full bg-gradient-to-b from-zinc-100 to-zinc-300 text-gray-700' id='home'>
      <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center justify-center'>
        <div className='h-full md:w-1/2 ml-5 mb-8 md:pr-14'>
            <h1 className='text-3xl sm:text-5xl text-gray-900 font-medium mb-4'>Hi! I'm <b className='text-blue-600'>Yuta Asai,</b>
              <br />
              a Frontend Developer.
            </h1>
            <p className='mb-6 leading-relaxed'>I am a Frontend Developer enthusiastic about 
              <br />
              building in JavaScript(including React), and 
              <br />
              I'm also deeply involved in User Experience design.</p>
              <p className='mb-8'>Skilled in JavaScript, React, TypeScript, HTML5, CSS3, and Tailwind CSS</p>
            <Link to='Contact' smooth duration={500} 
            className='text-gray-800 font-bold w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-zinc-400 to-zinc-500 cursor-pointer hover:scale-105'>
              Contact
            <span className='hover:rotate-90 duration-200'>
            <ChevronRightIcon />
            </span>
            </Link>
            </div>
            <div className='md:w-1/2 lg:max-w-md rounded-2xl'>
              <img src="./img/ping1.jpeg" alt="" />
            </div>
      </div>
    </div>
  )
}

export default Home