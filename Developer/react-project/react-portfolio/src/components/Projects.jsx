import React from 'react'
import ExpenseTracker from '../assets/portfolio/Expense-Tracker.png'
import Othello from '../assets/portfolio/Othello.png'
import WeatherForecast from '../assets/portfolio/WeatherForecast.png'

const Projects = () => {

    const portfolios = [
        {
            id: 1,
            src: ExpenseTracker,
        },
        {
            id: 2,
            src: Othello,
        },
        {
          id: 3,
          src: WeatherForecast,
        }
    ]

  return (
    <div name='Projects' className='text-gray-700 border-t border-gray w-full md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='text-center mb-20 pt-6'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>Project</h1>
        </div>

        <div className='grid sm:grid-cols-3 gap-8 px-12 sm:px-0 mx-auto'>

        {portfolios.map(({ id, src }) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center '>
                    <button className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-110'>Live Demo</button>
                    <button className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-110'>Code</button>
                </div>
            </div>
            ))
        }
        


</div>
      </div>
    </div>
  )
}

export default Projects