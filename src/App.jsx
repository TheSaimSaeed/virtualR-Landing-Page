import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/HeroSection'

export const App = () => {
  return (

    <>
      <Navbar/>
      <div className='max-w-7x1 mx-auto pt-2 px-6'>
        <HeroSection/>
    </div>
    </>
   
  )
}
