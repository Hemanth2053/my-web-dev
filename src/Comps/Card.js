import React from 'react'
import './Cardcomp.css';

function Card({busName,traveingTo,price,departure,type,rating}) {
  return (
    <div className="cardcomponent">
        <div className="firstcont">
            <h4>Bus Name : {busName}</h4>
            <h5>To : {traveingTo}</h5>
            <h5>Price : {price}</h5>
        </div>
        <div className="secondcont">
            <h5>Timing : {departure} pm</h5>
            <h5>Type : {type}</h5>
            <h5>Rating : {rating}</h5>
        </div>

    </div>
  )
}

export default Card