import React from 'react'
import Peoplesay from './Peoplesay'
import maria from '../images/customer1.jpg'
import anthony from '../images/customer2.jpg'
import tam from '../images/customer3.jpg'
import brand from '../images/customer4.jpg'
import fourStar from '../images/4stars.png'
import fiveStar from '../images/5stars.png'
import '../App.css'

const People = () => {
  return (
    <div className='peopleSayCards' >
        <h2>What people say about us!</h2>
        <div className='peopleSayComponent' >
            <div className='componentDivPeopleSay' >
            <Peoplesay image={maria} name={'Maria Sanchez'}  star={fourStar} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur repellat, esse a mollitia molestiae sapiente quaerat deserunt voluptate aliquam odit?'} />
            </div>
            <div className='componentDivPeopleSay' >
            <Peoplesay image={anthony} name={'Anthony Clifton'}  star={fiveStar} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur repellat, esse a mollitia molestiae sapiente quaerat deserunt voluptate aliquam odit?'} />
            </div>
            <div className='componentDivPeopleSay' >
            <Peoplesay image={tam} name={'Tamika Jackson'}  star={fourStar} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur repellat, esse a mollitia molestiae sapiente quaerat deserunt voluptate aliquam odit?'} />
            </div>
            <div className='componentDivPeopleSay' >
            <Peoplesay image={brand} name={'Brandon Ming'}  star={fiveStar} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur repellat, esse a mollitia molestiae sapiente quaerat deserunt voluptate aliquam odit?'} />
            </div>
        </div>
    </div>
  )
}

export default People