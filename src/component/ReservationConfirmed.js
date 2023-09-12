import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import '../App.css'


const ReservationConfirmed = ({display, setDisplay}) => {
  return (
    <div className='reservationConfirmationDiv' >
        <div className='reservationTick' ><FaCheckCircle/></div>
        <h3>Your reservation has been confirmed</h3>
        <p>You will receive an email with all the details</p>
    </div>
  )
}

export default ReservationConfirmed