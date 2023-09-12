import React from 'react'
import { Link } from 'react-router-dom'
import { BiCycling } from 'react-icons/bi'
import '../App.css'

const CardComponent = ({image, imgName, price, details, order, bike}) => {
  return (
    <div className='carddiv' >
        <img src={image} alt='' />
        <div className='imgprice' >
            <h6>{imgName}</h6>
            <h6>{price}</h6>
        </div>
        <p>{details}</p>
        <div className='orderDiv' >
           <Link to='./orderOnline' className='cardOrderLink' >{order}<img src={bike} alt='' /></Link>
        </div>
    </div>
  )
}

export default CardComponent