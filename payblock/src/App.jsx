import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Signup from './components/pages/Signup'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <Router>   
       <Navbar />
{/* There is no longer nothing like switch in React-router-dom it;s now routes  */}
       <Routes > 
        <Route path='/' exact Component={Home} />
        <Route path='/services'  Component={Services} />
        <Route path='/Products'  Component={Products} />
        <Route path='/sign-up'  Component={Signup} />
        <Route path='/contact'  Component={Contact} />
       </Routes>
    </Router>
     
  
    
    </>
  )
}

export default App
