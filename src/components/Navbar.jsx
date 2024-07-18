import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  return (
    <nav className=' font-sans-serif font-semibold bg-indigo-950 nav-full sticky top-0 flex md:flex justify-between pt-5 z-10 h-[8vh]'>
      <div className=' nav-container flex justify-between w-[75%] mx-auto'>
     
      <Link to="/">
          <span className="bg-green-950 p-3 ml-2 mt-2 sm:mt-0 text-white font-semibold text-xl">
              Birth Registration
            </span>
          </Link>
      
        <ul className=' text-white  flex justify-around w-[10cm]  pt-2 text-[18px]'>
          <Link to="/">
              <li className='hover:text-green-700 '>Home</li>
          </Link>
          <Link to="/contact">
              <li className='hover:text-green-700'>Contact</li>
          </Link>
          <Link to="/about">
              <li className='hover:text-green-700'>About</li>
          </Link>
          <Link to="/birth">
              <li className='hover:text-green-700'>Birth</li>
          </Link>
          <Link to="/login">
              <li className='hover:text-green-700'>Login</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
