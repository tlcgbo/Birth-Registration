import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='min-h-screen  text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
            >
        <div className='text-center'>

        
          <h1 className='p-10 font-semibold text-4xl sm:text-5xl text-purple-500'>
            Contact Us
          </h1>
        </div>
        <div className='flex flex-wrap justify-center'>
          <div className='w-full md:w-2/3 lg:w-1/2'>
            <div className='text-center mb-10'>
              <h2 className='font-semibold text-3xl text-black mb-4'>Email:</h2>
            </div>
            <div className='bg-indigo-950 p-8 rounded-lg shadow-lg'>
              <form>
                <div className='mb-6'>
                  <label className='block text-xl font-semibold mb-2' htmlFor='name'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500'
                    placeholder='Your Name'
                  />
                </div>
                <div className='mb-6'>
                  <label className=' block text-xl font-semibold mb-2' htmlFor='email'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500'
                    placeholder='Your Email'
                  />
                </div>
                <div className='mb-6'>
                  <label className='block text-xl font-semibold mb-2' htmlFor='message'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    className='w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500'
                    placeholder='Your Message'
                    rows='5'
                  ></textarea>
                </div>
                <div className='text-center'>
                  <button
                    type='submit'
                    className='w-full p-3 bg-purple-700 hover:bg-purple-800 rounded-lg text-xl font-bold'
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
