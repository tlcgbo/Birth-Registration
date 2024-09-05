import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

function Navbar({handleSignOut, isAuth}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <nav className='bg-indigo-950 text-white sticky top-0 z-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Link to="/" className="text-white font-semibold text-xl hover:text-purple-500">
              Birth Registration
            </Link>
          </div>
          <div className='flex md:hidden'>
            <button onClick={toggleMenu} className='text-white hover:text-gray-300 focus:outline-none'>
              {/* Icon for the hamburger menu */}
              <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
              </svg>
            </button>
          </div>
          <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
            <ul className='flex flex-col md:flex-row md:space-x-6 text-center md:text-left'>
              <Link to="/" onClick={() => setIsOpen(false)}>
                <li className='hover:text-green-700 mx-2 my-2 md:my-0'>Home</li>
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <li className='hover:text-green-700 mx-2 my-2 md:my-0'>Contact</li>
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                <li className='hover:text-green-700 mx-2 my-2 md:my-0'>About</li>
              </Link>
             
              


              {
                !isAuth ? (
                  <>
                     <Link to="/login" onClick={() => setIsOpen(false)}>
                      <li className='hover:text-green-700 mx-2 my-2 md:my-0'>Login</li>
                     </Link>

                     <Link to="/register" onClick={() => setIsOpen(false)}>
                      <li className='hover:text-green-700 mx-2 my-2 md:my-0'>Register</li>
                    </Link>
                  </>
                 

                  

                ) : (
                  <>
                    <Link to="/birth" onClick={() => setIsOpen(false)}>
                      <li className='hover:text-green-700 mx-2 my-2 md:my-0'>Birth</li>
                    </Link>
                    <button onClick={handleSignOut} className='hover:text-red-700 mx-2 my-2 md:my-0'>Sign Out</button>
                    
                  </>
                  
                )

                
              }
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </div>
    
  )
}

export default Navbar
