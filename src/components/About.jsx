import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='min-h-screen  text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap justify-center'>
          <div className='w-full lg:w-2/3'>
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h1 className='text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-600 to-red-500 text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight p-10 mb-3'>
                About
              </h1>
              <p className='p-6 sm:p-10 md:p-12 lg:p-16 rounded-lg border-4 border-emerald-900 bg-indigo-950 text-white text-center text-lg sm:text-xl lg:text-2xl'>
                Welcome to Birth Registration, your trusted partner in the journey of life. Our platform is dedicated to making the process of birth registration seamless, secure, and convenient. Whether you are a proud new parent or a responsible guardian, we are here to ensure that the first step in your child's legal identity is handled with care and precision. With our user-friendly interface and commitment to privacy, registering a birth has never been easier. Join us in celebrating new beginnings and safeguarding the future of our newest generations. Welcome to the family!
              </p>
              <div className='pt-10 text-center'>
                <Link to="/register" className='hover:bg-green-700 p-4 bg-purple-700 text-white text-xl sm:text-2xl lg:text-3xl font-bold rounded-lg'>
                  Register
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
