import React from 'react'
import Navbar from './components/Navbar'
import {  Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Birth from './components/Birth';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';




const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/birth' element={<Birth />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
      
    
  )
}

export default App
