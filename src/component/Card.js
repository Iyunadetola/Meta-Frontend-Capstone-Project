import React from 'react'
import { FaRunning } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CardComponent from './CardComponent'
import salad from '../images/greek-salad.jpg'
import brus from '../images/bruschetta.jpg'
import lemon from '../images/lemon-dessert.jpg'
import '../App.css'

const Card = () => {
  return (
    <div className='cardContainer' >
        <div className='cardMenuHeading' >
            <div>
                <h2>This weeks specials!</h2>
            </div>
            <div className='btnDiv' >
                <button> <Link className='card-btn' to='/menu' >Online Menu</Link> </button>
            </div>
        </div>
        <div className='componentDiv' >
            <div>
            <CardComponent image={salad} imgName={'Greek Salad'} price={'$12.99'} details={'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons'} order={'Order a delivery'} bike={<FaRunning/> }/>
            </div>
            <div>
                <CardComponent image ={brus} imgName={'Bruschetta'} price ={'$5.99'} details ={'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil'} order={'order a delivery'} />
            </div>
            <div>
                <CardComponent image ={lemon} imgName={'Lemon Dessert'} price ={'$5.00'} details ={"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined"} order={'order a delivery'} />
            </div>

        </div>
    </div>
  )
}

export default Card