import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='items-center justify-center bg-gradient-to-b from-neutral-200 to-gray-300 h-full w-full px-6 sm:px-16 m-auto'>
        <div className='flex flex-col p-4 justify-center mx-auto h-full'>
          <div className='p-4 mb-5 pt-10 sm:mb-3 sm:pt-16 justify-center'>
            <h1 className='text-4xl font-medium tracking-[6px] text-center '>Contact</h1>
            </div>
            <form action="https://getform.io/f/lajklddb" method="POST" className='flex flex-col w-full'>
                <p>Name</p>
                <input type="text" name='name'
                placeholder='Enter your name' 
                className='mt-2 mb-4 p-2 py-4 bg-transparent border-2 focus:outline-none'/>
                <p>Email</p>
                <input type="email" 
                placeholder='Enter your email'
                className='mt-2 mb-4 p-2 py-4 bg-transparent border-2 focus:outline-none' />
                <p>Message</p>
                <textarea name="message" 
                rows='10'
                id=""
                className='mt-2 p-2 py-4 bg-transparent border-2 focus:outline-none'></textarea>
                
                <div className='flex items-center justify-center'>
                    <button className='px-6 py-3 my-3 rounded-md bg-gradient-to-b from-stone-400 to-stone-500 hover:hover:scale-90 duration-200'>Send</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact