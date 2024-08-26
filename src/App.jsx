import React from 'react'
import { useSelector } from 'react-redux'
import About from './About'

const App = () => {

 
 
  
  return (
    <div className='flex flex-col justify-center items-center mt-[200px] gap-5 '>
      <input className='w-[800px] h-[60px] border border-teal-500 rounded-md text-2xl font-semibold' type="text" />
      <button className='py-4 px-[200px] bg-teal-500 rounded-md text-3xl font-semibold'>Add</button>
     <About/>
    </div>
  )
}

export default App
