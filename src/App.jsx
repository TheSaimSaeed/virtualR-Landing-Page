import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import WorkFlow from './components/WorkFlow'

export const App = () => {
  return (

    <>
      <Navbar/>
      <div className='max-w-7x1 mx-auto pt-2 px-6'>
        <HeroSection/>
    </div>
    <Features/>
    <WorkFlow/>
    </>
   
  )
}
