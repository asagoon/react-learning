import React, { useState } from 'react'
import ExpenseTracker from '../assets/portfolio/Expense-Tracker.png'
import Othello from '../assets/portfolio/Othello.png'
import WeatherForecast from '../assets/portfolio/WeatherForecast.png'

const Projects = () => {

  const portfolios = [
    {
        id: 1,
        title: 'ExpenseTracker',
        src: ExpenseTracker,
        code: 'https://github.com/asagoon/expense-tracker-app.git',
        description: 'Expense Tracking, easily track and categorize daily expenses, monitor spending habits, and identify areas where savings can be made. Designed to simplify the budgeting process with a simple MUI design, the app offers a variety of features to help you track spending, set financial goals, and save money.',
        tools: [
            'React.js',
            'TypeScript',
            'firebase',
            'Material UI',
    ]
    },
    {
        id: 2,
        title: 'Othello',
        src: Othello,
        code: 'https://github.com/asagoon/othello-javascript.git',
        description: 'A simple Othello game made with Javascript. Created with a user-friendly interface that is smooth and intuitive. For killing time!',
        tools: [
            'HTML',
            'CSS',
            'JavaScript',
    ]
        
    },
    {
      id: 3,
      title: 'WeatherForecast',
      src: WeatherForecast,
      code: 'https://github.com/asagoon/Weather-App-Portfolio.git',
      description: 'Easy weather forecast application. Check the weather you need on a daily basis!',
      tools: [
            'HTML',
            'CSS',
            'JavaScript',
    ]
    }
]

return (
<div className=' m-3 md:m-6 lg:m-10 lg:px-16 bg-slate-400'>
    <div className='flex flex-col justify-center mx-5 relative z-30'>
        <div className='grid grid-row-3 grid-cols-1 gap-10'>
            <div className='flex flex-col justify-center items-center mt-8'>
                <div className='text-[30px] md:text-[40px] lg:text-[50px] text-black border-b-4'>My Projects</div>
                
                    {/* <div className='flex flex-col mb-5'>
                        <h1 className='text-[20px] lg:text-[23px] text-black mb-3 border-b-2'>ExpenseTracker</h1>
                        <div className='flex justify-end text-[12px]'>
                            <p>
                                April
                            </p>
                        </div>
                        </div> */}
                        {portfolios.map(({ id, title, src, code, description, tools}) => (
                            <div key={id} className='my-10 min-[769px]:my-20 flex flex-col  xl:flex-row max-w-fit'>
                            <div className='relative flex items-center justify-center h-auto w-fit shadow-xl shadow-gray-400  hover:bg-[#242018]/50 group'>
                            <img src={src} alt="" width={300} className='group-hover:opacity-30'/>
                            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                <a href={code} className='text-[#A29F85] bg-[#FCF9EB] rounded-md px-3 py-2'>Git Hub</a>
                            </div>
                        </div>
                        <div className='flex flex-col max-w-lg mx-10'>
                            <h1 className='hidden xl:block text-[25px] text-text-color1 border-b-2'>{title}</h1>
                            <div className='flex justify-between text-[15px]'>
                                <p>#personal</p>
                                <p className='hidden xl:block'>April 2024</p>
                            </div>
                            <div className='pl-3 mt-3 max-w-fit'>
                                <p>{description}</p>
                        
                                <div className='flex flex-row flex-wrap'>
                                {tools.map((tool, idx) => (
                            <p
                                className="text-white rounded-full bg-[#FFCA6E]/80 px-2 text-sm mr-3 mt-2 w-fit whitespace-nowrap"
                                key={idx}
                            >
                                {tool}
                            </p>
                        ))}
                                    
                                </div>
                                {/* <div className="flex flex-row flex-wrap">
                                  {Object.values(portfolios.tools).map((tool, idx) => (
                                   <p className="text-white rounded-full bg-[#FFCA6E]/80 px-2 text-sm mr-3 mt-2 w-fit whitespace-nowrap"
                                      key={idx} >
                                         {tool}
                                    </p>
                                    ))}
                                </div> */}
                            </div>
                        </div>
                        </div>
                        ))}
                        
                    
                
            </div>
        </div>
    </div>
</div>
)
}

export default Projects