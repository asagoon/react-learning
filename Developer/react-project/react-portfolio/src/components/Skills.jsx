import React from 'react'
import html from '/img/HTML_logo.png'
import css from '/img/CSS3_logo.svg'
import javascript from '/img/JavaScript_Logo.png'
import react from '/img/react-logo.svg'
import typescript from '/img/ts-logo-256.png'
import tailwind from '/img/tailwindcss-mark.svg'
import firebase from '/img/Firebase-logo.png'
import github from '/img/Github_logo.png'

const Skills = () => {

  const skills = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-600',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-sky-500',
    },
    {
      id: 5,
      src: typescript,
      title: 'TypeScript',
      style: 'shadow-blue-400',
    },
    {
      id: 6,
      src: tailwind,
      title: 'Tailwind CSS',
      style: 'shadow-sky-400 pt-5',
    },
    {
      id: 7,
      src: firebase,
      title: 'Firebase',
      style: 'shadow-orange-300',
    },{
      id: 8,
      src: github,
      title: 'Github',
      style: 'shadow-gray-400 pt-3',
    },
  ]
  return (
    <div name='Skills' className='bg-gradient-to-b from-fuchsia-400 to-violet-800 m-3 md:m-6 lg:m-10 lg:px-16'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='text-center pt-6 mt-8'>
          <h1 className='text-[30px] md:text-[40px] lg:text-[50px] text-slate-800 border-b-4 border-gray-500 p-2 inline'>My Skills</h1>
          <p className='py-6 text-slate-800 md:text-xl'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
        
        {skills.map(({id, src, title, style})=> (
          <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className='w-20 mx-auto mt-2'/>
            <p className='mt-4 font-medium'>{title}</p>
          </div>
        
        ))}
        </div>
      </div>
    </div>
  )
}

export default Skills