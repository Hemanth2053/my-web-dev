import React from 'react'
import './Swiggycard.css'

function Swiggycard({hotel_Name, cuisine, rating, distance}) {

    

  return (
    <div className="swiggycardcont">
        <div className="firstcont">
            <h4>Hotel Name : {hotel_Name}</h4>
            <h4>Cuisine : {cuisine}</h4>
        </div>
        <div className="secondcont">
            <h4>Rating : {rating}</h4>
            <h4>Distance : {distance} km</h4>
        </div>
    </div>
  )
}

export default Swiggycard