import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'
const STYLES  = ['btn-primary', 'btn-outline'];
const SIZES = ['btn-medium', 'btn-large'];
export const Button = ({
    children, 
    type,
    onClick,
    buttonStyle,
    buttonSize}) =>{
        const checkButtonStyle = 
        STYLES.include(buttonStyle) ? buttonStyle  
        : STYLES[0];

        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize
        : STYLES[0];

        return ( 
            <Link to='/sign-up' className='btn-mobile'>
                <Button className={`btn ${checkButtonSize} ${checkButtonStyle}`}
                onClick={onClick} 
                 type={type} >
                {children}
                </Button>
                 </Link>
         )
    };
    
export default Button
