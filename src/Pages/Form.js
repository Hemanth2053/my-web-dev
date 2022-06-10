import React from 'react'
import useForm from '../CustomHooks/useForm'
import { useState } from 'react'
import './Formstyles.css'


function Form() {
    const makeMytrip = [
        { busName: "KRP", rating: 4.5, traveingTo: "Chennai", departure: "8", type: "AC sleeper", price: 700 },
        { busName: "PVR", rating: 4, traveingTo: "Chennai", departure: "10", type: "AC sleeper", price: 1100 },
        { busName: "RPN", rating: 3.5, traveingTo: "Coimbatore", departure: "11", type: "Non-AC sleeper", price: 800 },
        { busName: "Parven", rating: 5, traveingTo: "Chennai", departure: "7", type: "AC sleeper", price: 700 },
        { busName: "Scania", rating: 4, traveingTo: "Madurai", departure: "11", type: "AC sleeper", price: 1200 },
        { busName: "Raj Travels", rating: 3, traveingTo: "Salem", departure: "11", type: "AC sleeper", price: 900 },
        { busName: "SRM Travels", rating: 4, traveingTo: "Chennai", departure: "10", type: "AC sleeper", price: 850 },
        { busName: "KKR Travels", rating: 4, traveingTo: "Coimbatore", departure: "9", type: "Non-AC sleeper", price: 450 },
        { busName: "MKP Tours", rating: 5, traveingTo: "Chennai", departure: "8", type: "Non-AC sleeper", price: 1250 },
        { busName: "KRI travles", rating: 3, traveingTo: "Coimbatore", departure: "9", type: "AC sleeper", price: 1400 },
        { busName: "HP bus", rating: 2, traveingTo: "Chennai", departure: "8", type: "AC sleeper", price: 800 },
        { busName: "JRP Travels", rating: 4, traveingTo: "Madurai", departure: "9", type: "AC sleeper", price: 650 },
    ]
    
    const [data, setData] = useState(makeMytrip)

    const initialData = { busName:"", traveingTo:"", price:"", rating:"", departure:"", type:"",}
    const {formData, handleChange, setFormData} = useForm(initialData)

    const handleSubmit = (e)  => {
        e.preventDefault();
        data.push(formData)
        console.log(data)
    }
    return (
        <div>
            <form 
            className="formcont"
            onSubmit={handleSubmit}>
                <input
                    className="inputcont"
                    placeholder="Bus Name"
                    name="busName"
                    value={formData.busName}
                    onChange={handleChange}
                ></input>
                {/* <input
                    className="inputcont"
                    placeholder="To"
                    name="traveingTo"
                    value={formData.traveingTo}
                    onChange={handleChange}
                ></input> */}
                <select className="selectcont" value={formData.selected} name="selected" onChange={handleChange}>
                    <option value="Chennai" >Chennai</option>
                    <option value="Coimbatore" >Coimbatore</option>
                    <option value="Salem" >Salem</option>
                    <option value="Madurai" >Madurai</option>
                </select>

                <input
                    className="inputcont"
                    placeholder="Price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                ></input>
                <input
                    className="inputcont"
                    placeholder="Departure"
                    name="departure"
                    value={formData.departure}
                    onChange={handleChange}
                ></input>
                {/* <input
                    className="inputcont"
                    placeholder="Type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                ></input> */}
                <select className="selectcont" value={formData.selected} name="selected" onChange={handleChange}>
                    <option value="AC" >AC Sleeper</option>
                    <option value="Non-Ac" >Non-AC Sleeper</option>
                    
                </select>
                {/* <input
                    className="inputcont"
                    placeholder="Rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                ></input> */}
                {/* <h5>Rating</h5> */}
                <p>Rating</p>
                <input className="inputrangecont" type="range" min="0" max="5" onChange={handleChange} value={formData.range} name="range" />
                <button className="submitcont" type="submit">Submit</button>
            </form>
        </div>
    
    
  )
}

export default Form