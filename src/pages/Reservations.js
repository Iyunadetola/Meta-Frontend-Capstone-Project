import React from 'react'
import '../App.css'
import { useState } from 'react'
import ReservationConfirmed from '../component/ReservationConfirmed'
import { Link} from 'react-router-dom'


const Reservations = () => {

  // const [display, setDisplay] = useState(false)

  return (
    <div>
      <div className='reservationheader' >
      <h2>Table reservation</h2>
      </div>
    <div className='reservation' >
      
      <div>
        <label htmlFor="date">Date<br />
        <input type={'date'} date={'date'}/>
        </label>
      </div>
      <div>
        <label htmlFor="time">Time <br />
        <select name='time' id='time' className='reservationTime' >
        <option value='17:00' >17:00</option>
        <option value='18:00' >18:00</option>
        <option value='19:00' >19:00</option>
        <option value='20:00' >20:00</option>
        <option value='21:00' >21:00</option>
        </select>
        </label>
      </div>

      <div>
        <label htmlFor="time">Number of Guest <br />
        <select name='number of guest' id='number of guest' className='reservationTime' >
        
        <option value='1' >1</option>
        <option value='2' >2</option>
        <option value='3' >3</option>
        <option value='4' >4</option>
        <option value='5' >5</option>
        <option value='6' >6</option>
        <option value='7' >7</option>
        <option value='8' >8</option>
        <option value='9' >9</option>
        <option value='10' >10</option>
        </select>
        </label>
      </div>
      <div>
        <label htmlFor="occassion">Occcassion<br />
        <select name='number of guest' id='number of guest' className='reservationTime' >
        <option value='Birthday' >Birthday</option>
        <option value='Anniversary' >Anniversary</option>
        </select>
        </label>
      </div>
      <div>
      <Link to='/reservationConfirmed' ><button>
        Make your reservations</button></Link>
      </div>
      
    </div>
    </div>
  )
}

export default Reservations