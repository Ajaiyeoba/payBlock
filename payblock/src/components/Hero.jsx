import React from 'react'
import {Button} from './Button'
function Hero() {
  return (
    <div className='hero-container'>
        <h1>Click to Receive Payment</h1>
        <p>Beg Smoothly</p>
        <div className="hero-btn">
            <Button className='btn' buttonStyle='btn-outline'>
                Receive
            </Button>
        </div>
    </div>
  )
}

export default Hero