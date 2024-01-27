import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'



function CardItem(props) {
  return (
<>
<li className="cards__item" >
    <Link className="cards__item__link" to={props.path}>
        <div className="card__item__imgwrap" data-category={props.label}>
         <img src={props} alt="" 
         className="card__item__img" />
        </div>
        <div className="card__item__info">
          <h5 className="card__item__text" >{props.text}</h5>
        </div>
    </Link>
</li>
</>
  )
}

export default CardItem