import React from 'react'
import chef1 from '../images/chefs-mario-and-adrian_a.jpg'
import chef2 from '../images/chefs-mario-and-adrian_b.jpg'
import '../App.css'

const Main = () => {
  return (
    <div className='mainContainer' >
      <div className='mainText' >
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aperiam explicabo vitae quia tempora quam, officia veniam consequatur ipsa eius reprehenderit numquam quaerat quibusdam eaque quisquam ducimus aliquam nulla saepe maiores, molestiae, iusto magni fugit corporis. Suscipit saepe, aliquid exercitationem laborum vero nihil quaerat laboriosam quia commodi quas recusandae nulla itaque totam incidunt et dolorem sequi dicta sed. Non animi explicabo soluta unde quas sed officiis temporibus voluptatibus porro tenetur ratione nemo necessitatibus itaque velit, cumque quod pariatur sit repudiandae culpa ullam optio asperiores aut. Sunt velit ducimus perspiciatis voluptatem delectus officia consectetur repudiandae quia, beatae sed minima accusamus ullam.</p>
      </div>
      <div className='mainImg' >
          <img src={chef1} className='mainChef1' alt= 'chef one' />
          <img src={chef2} className='mainChef2' alt="chef two" />
      </div>
    </div>
  )
}

export default Main