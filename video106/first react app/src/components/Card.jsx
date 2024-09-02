// import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className="card" style={{overflow: "hidden"}}>
        <img src="https://th.bing.com/th/id/OIP.yFeSv0o0Wnj1IWF5yrWZkAHaGO?w=192&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" width={200} style={{border: "2px solid black"}}/>
       <h1>{props.title}</h1>
       <p>{props.description}</p>
    </div>
  )
}

export default Card
