import React from 'react'
import {Link} from 'react-router-dom'

function CardItem() {
  return (
<>
<li className="cards__item">
    <Link className="cards__item__link">
        <div className="card__item__imgwrap">
         <img src="" alt="" 
         className="card__item__img" />
        </div>
    </Link>
</li>
</>
  )
}

export default CardItem