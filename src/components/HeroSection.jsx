import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
const HeroSection = () => {
  return (
    <div className="flex flex-col  items-center">
        <h1 className='text-4xl sm:text-6xl lg:text-7xl tracking-wide text-center'>VirtualR builds tools {" "}
            <span className='bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text'>for developers</span>
        </h1>

        <p className='pt-10 text-neutral-400 max-w-4xl text-center text-lg'>Empower your creativity and bring your VR app ideas to life with out intutive development tools.Get started today and turn your imagination into immersive reality.</p>
 
         <div className="lg:flex justify-center items-center space-x-3 mt-5">
                <a href="#" className="py-2 px-3 border rounded-md">Start for Free</a>
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-400 py-2 px-3 border rounded-md">Documentation</a>
         </div>

         <div className="flex space-x-4 mt-10 justify-center">
            <video autoPlay muted loop src={video1} typeof='video/mp4' className='w-1/3 border-orange-700 rounded-lg shadow-sm shadow-orange-400 '>Your Browser Not support the video</video>
            <video autoPlay muted loop className='w-1/3 rounded-lg border-orange-700  shadow-orange-400 shadow-sm'><source src={video2}typeof='video/mp4'/> Your Browser Not support the video</video>
         </div>
    </div>
  )
}

export default HeroSection