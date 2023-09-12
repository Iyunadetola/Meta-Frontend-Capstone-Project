import React from 'react'
import '../App.css'

const Peoplesay = ({image, name, star,text}) => {
  return (
    <div className='peopleSayCard' >
        <img src= {image} className='customer' alt='' />
        <p className='name' >{name}</p>
        <img className='starImg' src= {star} alt='' />
        <p>{text}</p>

    </div>
  )
}

export default Peoplesay