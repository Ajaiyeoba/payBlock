import React, { useState } from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <> 
        <nav className="navbar">
        <div className="navbar-container">
    <Link to='/' className='navbar-logo'>
        payBlock</Link>
        
        <div className="menu-icon" onClick={handleClick}>

        </div>

        <ul className={click ? 'nav-menu acive': 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links'>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='/products' className='nav-links'>Products</Link>
            </li>
            <li className='nav-item'>
                <Link to='/contact' className='nav-links'>Contact</Link>
            </li>
            <li className='nav-item'>
                <Link to='/services' className='nav-links'>Services</Link>
            </li>
            <li className='nav-item'>
                <Link to='/sign-up' className='nav-links-mobile'>Sign up</Link>
            </li>
        </ul>
        </div>
    </nav>
    </>

  )
}

export default Navbar