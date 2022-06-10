import React from 'react'

function Paginate({postPerPage, totalPost, paginate}) {
    const pageNumber = []

    for (let i = 1; i<=Math.ceil(totalPost/postPerPage);i++){
        pageNumber.push(i)
}
  return (
    <div>

        <ul 
            style={{
                
                marginLeft: "150px",
                height: "10px",
                width: "200px",
                display: "flex",
                flexWrap: "wrap",
                fontWeight: "bold",
                justifyContent: "space-evenly",
                

            }}
        >
            
            {pageNumber.map(number => (
                <ul  key={number}>
                    <h6  onClick={()=>paginate(number)}>{number}</h6>
                </ul>                
            ))}
        </ul>
    </div>
  )
}

export default Paginate