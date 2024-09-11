import React from 'react'
import Navbar from './components/Navbar'
import {  Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Birth from './components/Birth';
import Contact from './components/Contact';
import Login from './components/Login';
import Footer from './components/Footer';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import { useEffect, useState } from 'react';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    window.location.pathname = "/login"
    })
  }

  return (
    <div>
      <ToastContainer position='top-right' theme='colored' />
      <Navbar handleSignOut={signUserOut} isAuth={isAuth}/>
      <Routes>
        <Route path='/' element={<Homepage isAuth={isAuth} />} />
        <Route path='/about' element={<About isAuth={isAuth} />} />
        <Route path='/birth' element={<Birth isAuth={isAuth} />} />
        <Route path='/contact' element={<Contact isAuth={isAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        <Route path='/register' element={<Register setIsAuth={setIsAuth} />} />
      </Routes>
      <Footer />
    </div>
      
    
  )
}

export default App
