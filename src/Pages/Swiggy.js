import React from 'react'
import { useState } from 'react'
import Swiggycard from '../Comps/Swiggycard'
import Swiggypaginate from '../Comps/Swiggypaginate'
import './SwiggyPage.css' 

function Swiggy() {

    const Swiggy = [
        { hotel_Name: "vasant Bhavan", cuisine: "Indian", rating: 4, distance: 4 },
        { hotel_Name: "A2B", cuisine: "Indian", rating: 3, distance: 3 },
        { hotel_Name: "Saravana Bhavan", cuisine: "Indian", rating: 4, distance: 4 },
        { hotel_Name: "Dominos", cuisine: "American", rating: 4, distance: 3 },
        { hotel_Name: "Taco bell", cuisine: "Mexican", rating: 3, distance: 14 },
        { hotel_Name: "KFC", cuisine: "American", rating: 2, distance: 24 },
    ]
    
    const [data, setData] = useState(Swiggy)

    const handleFilter = (value) => {
        const DuplicateData = [...Swiggy]
        setCurrentPage(1)
        if(value === "All"){
            setData(Swiggy)
            return;
        }
        const filterdData = DuplicateData.filter(a => a.cuisine === value)
        setData(filterdData)
        return;
    }

    const handleDistanceSort = (value) => {
        const DuplicateData = [...Swiggy]
        const sortedDistanceData = DuplicateData.sort((a, b) => a.distance-b.distance)
        setData(sortedDistanceData)
        return;
    }

    const handleRatingSort = (value) => {
        const DuplicateData = [...Swiggy]
        const sortedRatingData = DuplicateData.sort((a, b) => b.rating-a.rating)
        setData(sortedRatingData)
        return;
    }

    const[currentPage, setCurrentPage] = useState(1)
    const[postPerPage, setPostPerPage] = useState(4)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const IndexOfLastPost = currentPage*postPerPage
    const indexOfFirstPost = IndexOfLastPost-postPerPage
    let currentPost = data.slice(indexOfFirstPost, IndexOfLastPost)
    
  return (
    <div className="cont">
        <div className="headercomp">
            <h2>SWIGGY</h2>
                    <button className="sortswiggybtn" onClick={()=>handleDistanceSort()}>Distance</button>
                    <button className="sortswiggybtn" onClick={()=>handleRatingSort()}>Rating</button>
        </div>
        <div className="main">
            <div className="sidebar">
                <h4>SHOW ALL..</h4>
                <div>
                    <button className="allswiggybtn" onClick={()=>handleFilter("All")}>Show All</button>
                </div>
                <h4>CUISINES</h4>
                <div>
                    <button className="cuisinebtn" onClick={()=>handleFilter("Indian")}>Indian</button>
                    <button className="cuisinebtn" onClick={()=>handleFilter("American")}>American</button>
                    <button className="cuisinebtn" onClick={()=>handleFilter("Mexican")}>Mexican</button>
                </div>

                <div>
                    
                </div>
            </div>
            <div className="content" style={{display:"flex", flexWrap: "wrap", width:"100%",}}>
                {currentPost.map(a => (
                    <Swiggycard key={a.hotel_Name} hotel_Name={a.hotel_Name} cuisine={a.cuisine} distance={a.distance} rating={a.rating} />
                ))}
            </div>
        </div>
        <div className="footer">
            <Swiggypaginate postPerPage={postPerPage} totalPost={Swiggy.length} paginate={paginate}/>
        </div>


    </div>
  )
}

export default Swiggy