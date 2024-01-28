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
                    src='https://lh3.googleusercontent.com/gps-proxy/AMy85WKANdQbNmuvZ2YXB2oXMAQSVs6gTU5nZxjwVkqIw86LOW8HX-pLSw7zt13DI-Yku3OGI5QUOQ7_b1E1tHF15OO58qm0XMxuJVF6Ec1LkwODsw75KUCoqUUBUNm-eruAi9TuyaanUCba0Xg9E1OgJakq53ewIF6GOvnFVvgYyD8Cp2Ms5q5ZCeGRFQ=w287-h192-n-k-rw-no-v1'
                    text='Hello Africa'
                    label='Adventure'
                    path='/services'
                    />
                      <CardItem 
                    src='https://lh3.googleusercontent.com/p/AF1QipM62rvr4JXihSapUykMuCixwuYCTIty0_6mXc2H=w287-h192-n-k-rw-no-v1'
                    text='Hello Gha yjbcjhbdvbdvb'
                    label='Adventure'
                    path='/services'
                    />
                                        <CardItem 
                    src=''
                    text='Hello Egyptihjemschjberfs'
                    label='Adventure'
                    path='/services'
                    />
                                        <CardItem 
                    src=''
                    text='Hello Nigeriayhrejshrshuwds'
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