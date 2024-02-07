import React from 'react'
import CardItem from './CardItem'
import product1 from '../assets/img/product-1.svg' 
import product2 from '../assets/img/product-2.svg' 
import product3 from '../assets/img/product-3.svg' 
import product4 from '../assets/img/product-4.svg' 

export default function  Card(){
  return(
    <div className='card'>
        <h1>
            Flex with your Finances
        </h1>
        <div className="card__container">
            <div className="card__wrapper">
                <ul className="card__item">
                    <CardItem 
                    src={product1}
                    text='Hello Africa'
                    label='Adventure'
                    path='/services'
                    />
                      <CardItem 
                    src=''
                    text='Hello Gha yjbcjhbdvbdvb'
                    label='Adventure'
                    path='/services'
                    />
                   <CardItem 
                    src={product3}
                    text='Hello Egyptihjemschjberfs'
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem 
                    src={product4}
                    text='Hello Nigeriayhrejshrshuwds'
                    label='Adventure'
                    path='/services'
                    />
                    
                </ul>
            </div>
        </div>
    </div>
  );
}

