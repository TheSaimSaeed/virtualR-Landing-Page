import React from 'react'
import logo from '../assets/logo.png'
import {navItems} from '../constants/index'
import { useState } from 'react'
import { Menu,X } from 'lucide-react'


const Navbar = () => {
    const[mobileDrawerOpen, setMobileDrawerOpen]= useState(false);

    const toggleDrawer = ()=>{
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
    <nav className='sticky top-0 py-1 backdrop-blur-lg z-50'>
        <div className="flex justify-between items-center m-2">
            
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                <span className="text-xl tracking-tight">VitualR</span>
            </div>


            <ul className="hidden lg:flex space-x-12">
                {navItems.map((item,index)=>
            
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                )
                }
            </ul>


            <div className="hidden lg:flex justify-center items-center space-x-3">
                <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-400 py-2 px-3 border rounded-md">Create an Account</a>
            </div>

            <div className="lg:hidden">
                <button onClick={toggleDrawer}>{mobileDrawerOpen ? <X/> : <Menu/>}</button>
            </div>
 
        </div>

        {mobileDrawerOpen && (
            <div className="fixed z-20 flex flex-col bg-neutral-900 w-full p-10 justify-center items-center lg:hidden">
                <ul className="space-x-12 p-3">
                {navItems.map((item,index)=>
            
                        <li key={index} className='py-2'>
                            <a href={item.href}>{item.label}</a>
                        </li>
                )
                }
            </ul>

            <div className="flex justify-center items-center space-x-3">
                <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-400 py-2 px-3 border rounded-md">Create an Account</a>
            </div>
            
            </div>
        )}



    </nav>
  )
}

export default Navbar