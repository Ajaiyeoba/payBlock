import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'



function CardItem() {
  return (
<>
<li className="cards__item">
    <Link className="cards__item__link">
        <div className="card__item__imgwrap">
         <img src="" alt="" 
         className="card__item__img" />
        </div>
        <div className="card__item__info">
          <h5 className="card__item__text"> Explore your Finances with us</h5>
        </div>
    </Link>
</li>
</>
  )
}

export default CardItem