import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Homepage = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='container mx-auto px-10'>
        <div className='mx-4 flex flex-wrap'>
          <div>
          <motion.div
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 75 },
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.25 }}
                        >
                            <h1 className=' text-center text-transparent bg-clip-text text-purple-950 sm:text-8xl text-4xl from-black p-10 mb-3  font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]'>
                                Birth
                                 <br />
                                <span className=" text-white sm:text-8xl text-6xl">
                                     Registration
                                 </span>
                            </h1>
                            <p className='bg-slate-600 p-10 text-white text-2xl mb-8  max-w-[480px] sm:text-base'>
                            Welcome to Birth Registrar, your trusted partner in the journey of life.
                             Our platform is dedicated to making the process of birth registration seamless, secure, and convenient. Whether
                              you are a proud new parent or a responsible guardian, we are here to ensure that the first step in your child's legal identity
                               is handled with care and precision. With our user-friendly interface and commitment to privacy, registering a birth has never been easier.
                                Join us in celebrating new beginnings
                                and safeguarding the future of our newest generations. Welcome to the family!
                            </p>
                        </motion.div>
                        <motion.div
                            variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -75 },
                             }}
                             initial="hidden"
                            animate="visible"
                             transition={{ duration: 0.5, delay: 0.25 }}
                        >
                        <ul class="flex flex-wrap items-center">
                            <li>
                                <Link
                                     to="#"
                                    class="bg-blue-400 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-blue-500 sm:px-10 lg:px-8 xl:px-10"
                                >
                                 Get Started
                                </Link>
                            </li>
                            </ul>
                            </motion.div>
                        

          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
