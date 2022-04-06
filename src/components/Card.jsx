import React from 'react';
import { isDivisible } from '../utils/Divisible';



const Card = ({ title, loading }) => {

  const number = isDivisible(Number(title));
  let color = loading ? 'whitesmoke' : (number === 6 ? 'orange' : (number === 3 ? 'green' : (number === 2 ? 'blue': 'whitesmoke')));
   

  return (
    <div className="card_container">
      <div className="card_background" style={{backgroundColor: color}}>
      
      </div>    
      <h2 className="card_title">{title}</h2>
    </div>
  )
}


export default Card
