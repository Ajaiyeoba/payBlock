import React from 'react'
import {Button} from './Button'
import '../App.css'
import './Hero.css'

function Hero() {
  return (
    <div className='hero-container'>
        <h1><span>Personalized</span> Heartfelt Message</h1>
        <p>Beg Smoothly! Click to Receive Payment.
           Seeking Financial Help can be horrible at times. Rizz them with your style! They should not ask for your details </p>
        <div className="hero-btn">
        <Button className='btn' buttonStyle='btn-outline'>
             Receive Payment </Button>
        </div>


    </div>




  )
}

export default Hero