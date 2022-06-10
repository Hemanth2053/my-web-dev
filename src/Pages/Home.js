import React from 'react'
import './Homepage.css'
import { useState } from 'react'
import Card from '../Comps/Card'
import Paginate from '../Comps/Paginate'
import Form from './Form' 

function Home() {
  
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
    
      const handleCityFilter = (value) => {
        const DuplicateData = [...makeMytrip]
        setCurrentPage(1)
        if(value === "All"){
          setData(makeMytrip)
          return;
        }
        const filterdCityData = DuplicateData.filter(a=> a.traveingTo === value)
        setData(filterdCityData)
        return;
      } 
      
      const handlePriceAboveFilter = (value) =>{
        const DuplicateData = [...makeMytrip]
        const filterdPriceData = DuplicateData.filter(a=> a.price >= 800)
        setData(filterdPriceData)
        return;
      }
      const handlePriceBelowFilter = (value) =>{
        const DuplicateData = [...makeMytrip]
        const filterdPriceData = DuplicateData.filter(a=> a.price <= 800)
        setData(filterdPriceData)
        return;
      }
      const handleRatingSort = (value) => {
        const DuplicateData = [...makeMytrip]
        const sortedRatingData = DuplicateData.sort((a, b) => a.rating-b.rating)
        setData(sortedRatingData)
        return;
      }
      const handlePriceSort = (value) => {
        const DuplicateData = [...makeMytrip]
        const sortedPriceData = DuplicateData.sort((a, b) => a.price-b.price)
        setData(sortedPriceData)
        return;
      }
      
      const [currentPage, setCurrentPage] = useState(1)
      const [postPerPage, setPostPerPage] = useState(4)
    
      const paginate = (pageNumber) => setCurrentPage(pageNumber)
    
      const IndexOfLastPost = currentPage * postPerPage
      const IndexOfFirstPost = IndexOfLastPost-postPerPage
      let currentPost = data.slice(IndexOfFirstPost, IndexOfLastPost)
    
    //   const [formData, setFormData] = useState(makeMytrip);
    
    //   const handleChange = (e) => {
    //       const { name, value } = e.target;
    //       setFormData({...formData, [name]: value})
    //   }
    // return {
    //   formData,
    //   setFormData,
    //   handleChange
    // }
    
      return (
    
        
        <div className="App">
          <div className="headercomp">
            <div>
              <button className="sortbtn" onClick={() => handlePriceSort()}>Price</button>
              <button className="sortbtn" onClick={() => handleRatingSort()}>Rating</button>
              
            </div>
          </div>
          <div className="main">
            <div className="sidebarcont">
              <div>
                <button className="allbtn" onClick={()=>handleCityFilter("All")}>Show All</button>
              </div>
              <h3>CITIES</h3>
              <div style={{ display: "flex", flexDirection: "column"}}>
              
                <button className="filterbtn" onClick={()=> handleCityFilter("Chennai")}>Chennai</button>
                <button className="filterbtn" onClick={()=> handleCityFilter("Coimbatore")}>Coimbatore</button>
                <button className="filterbtn" onClick={()=> handleCityFilter("Salem")}>salem</button>
                <button className="filterbtn" onClick={()=> handleCityFilter("Madurai")}>Madurai</button>
              </div>
              <h3>PRICES</h3>
              <div style={{ display: "flex", flexDirection: "column"}}>
                
                <button className="pricefilterbtn" onClick={()=>handlePriceAboveFilter()}>Above 800</button>
                <button className="pricefilterbtn" onClick={()=>handlePriceBelowFilter()}>Below 800</button>
              </div>
            </div>
            <div className="contentcont" style={{style:"flex", flexDirection: "row"}}>
          
              {currentPost.map(a=>(
                  <Card key={a.busName} busName={a.busName} traveingTo={a.traveingTo} price={a.price} departure={a.departure} type={a.type} rating={a.rating}/>
              ))}
            </div>
            <div className="formcont">
                <p>Form</p>
                <Form />
            </div>
    
          </div>
          <div className="footercont">
              <Paginate postPerPage={postPerPage} totalPost={makeMytrip.length} paginate={paginate}/>
          </div>
        </div>
      );
    }

export default Home