import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>
    <Router>   
       <Navbar />
{/* There is no longer nothing like switch in React-router-dom it;s now routes  */}
       <Routes > 
        <Route path='/' exact />
       </Routes>
    </Router>
     
    
    </>
  )
}

export default App
