import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Homepage = () => {
  return (
    <div className='min-h-screen  text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap justify-center pt-16 md:pt-24 lg:pt-32'>
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

              <div className='p-10'>

              <h1 className='text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight'>
                Birth  <h1 className='text-purple-500'>Registration</h1>
              </h1>

              <p className='mt-6 text-black  text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed'>
                Welcome to Birth Registration. Here you can register your baby within 42 days of
                birth in England, Wales, Northern Ireland and 24 days in Scotland. You must register your baby before you can get a birth certificate. It is best to register the birth at the register office in the district where the baby was born. A birth certificate is a vital record that documents the birth of a person. The term "birth certificate" can refer to either the original document certifying the circumstances of the birth or to a certified copy or representation of the ensuing registration of that birth.
              </p>

              </div>
              
              
              <div className='mt-10'>
                <Link 
                  to="/register" 
                  className='inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg text-xl md:text-2xl'
                >
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

export default Homepage
