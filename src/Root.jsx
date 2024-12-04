import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'

const Root = () => {
  return (
    <div className='h-screen py-10 '>
        <div className='w-[1440px] mx-auto bg-black h-full rounded-[30px] flex overflow-hidden py-5 px-5'>
            <Sidebar/>
            <Outlet/>

        </div>
      
    
    </div>
  )
}

export default Root
