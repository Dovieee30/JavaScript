import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROddEThIZN44GBpZhmBtIiFLrPidq2l0Racw&s" alt="" width="100%" height="200px" 
        style={{border: "2px solid yellow"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>    
    </div>
  )
}

export default Card
