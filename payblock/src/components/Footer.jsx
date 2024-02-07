import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
    <section className="footer_sub">
        <p className="footer-sub-heading ">
            Adventure exploration, Exposure
        </p>
        <p className="footer-sub-text"> Join Us</p>
        <div className="footer-input">
          <form>  
            <input type="email" name='email ' placeholder='Enter Your Email' className="footer-email" />
            <Button buttonStyle='btn-primary'> Subcribe</Button>
          </form>
        </div>
        </section>
        <div className="footer-links">
          <div className="footer-links-wrapper">
            <div className="footer-links-items">
              <h2>About Us</h2>
              <Link to='/signup'> How it works</Link>
              <Link to='/'>Testimonials</Link>
              <Link to='/'> Scholarships</Link>
              <Link to='/'>Careers</Link>
            </div>
            <div className="footer-links-items">
              <h2>Contact Us</h2>
              <Link to='/signup'> Gmail</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>X</Link>
              <Link to='/'>Discord</Link>
            </div>
          </div>
          <div className="footer-links-wrapper">
            <div className="footer-links-items">
              <h2> Payments</h2>
              <Link to='/signup'> Local </Link>
              <Link to='/'>International</Link>
              <Link to='/'>Corporate</Link>
              <Link to='/'>Loans</Link>
            </div>
            <div className="footer-links-items">
              <h2> Videos</h2>
              <Link to='/signup'> Submit</Link>
              <Link to='/'>Watch Vidoe</Link>
              <Link to='/'>Influence</Link>
              <Link to='/'>Agency</Link>
            </div>
          </div>
        </div>

        <section className="social-media">
          <div className="social-media-wrapper">
            <div className="footer-logo">
              <Link to='/' className="social-logo">
              Metroplus
              </Link>
              <div className="footer-rights">
              Metroplus © 2024
              </div>
              <div className="social-icons">
                <Link to='/'
                      target='_blank'
                      aria-label='facebook'
                 className="social-icons-links facebook">
                  <i></i>
                </Link>

                <Link to='/'
                      target='_blank'
                      aria-label='x'
                 className="social-icons-links x">
                  <i></i>
                </Link>

                <Link to='/'
                      target='_blank'
                      aria-label='instagram'
                 className="social-icons-links instagram">
                  <i></i>
                </Link>

                <Link to='/'
                      target='_blank'
                      aria-label='Youtube'
                 className="social-icons-links Youtube">
                  <i></i>
                </Link>
                <Link to='/'
                      target='_blank'
                      aria-label='Linkedln'
                 className="social-icons-links Linkedln">
                  <i></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Footer