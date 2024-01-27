import React from 'react'
import CardItem from './CardItem'

function Card() {
  return (
    <div className='card'>
        <h1>
            Flex with your Finances
        </h1>
        <div className="card__container">
            <div className="card__wrapper">
                <ul className="card__item">
                    <CardItem 
                    src=''
                    text='Hello Africa'
                    label='Adventure'
                    path='/services'
                    />
                                        <CardItem 
                    src=''
                    text='Hello Gha'
                    label='Adventure'
                    path='/services'
                    />
                                        <CardItem 
                    src=''
                    text='Hello Egypt'
                    label='Adventure'
                    path='/services'
                    />
                                        <CardItem 
                    src=''
                    text='Hello Nigeria'
                    label='Adventure'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Card