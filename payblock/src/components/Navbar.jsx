import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-container">
    <Link to='/' className='navbar-logo'>
        payBlock</Link>
        </div>
    </div>
  )
}

export default Navbar