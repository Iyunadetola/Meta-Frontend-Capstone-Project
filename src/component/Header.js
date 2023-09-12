import React from 'react'
import { Link } from 'react-router-dom'
import turkey from '../images/restaurant-food.jpg'
import headerImg from '../images/fruits.jpg'
import '../App.css'

const Header = () => {
  return (
    //   desktop design
    <div>
        < div className='headerdiv' >
        
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned meditterranean restaurant, focused <br/> on traditional recipes served with modern twist.</p>
            <button><Link to='/reservations' className='btn-link' > Reserve a table</Link> </button>
            <div className='headerimg' >
            <img src={turkey} alt='restaurant food' />
            </div>
        </div>
        {/* mobile version */}
        <div className='headerMobile' >
            <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned meditterranean restaurant, focused <br/> on traditional recipes served with modern twist.</p>
            <button><Link to='/reservations' className='btn-link' > Reserve a table</Link> </button>
            </div>
            {/* <br />
            <br /> */}
            {/* <div className='headerMobileImg' >
            <img src={headerImg} alt='restaurant food' />
            </div> */}
        </div>
    </div>
  )
}

export default Header