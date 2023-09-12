import React, {useState, useRef} from 'react';
import logo from '../images/littlelemon logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../App.css'

const Nav = () => {
  const navRef = useRef()

  const showMenu = ()=>{
    navRef.current.classList.toggle('responsive-nav')
  }

  return (
    <header className='navHeaderContainer' >
     
        <Link to='./' ><img className='logo' src={logo} alt=''  /> </Link>

        <nav ref={navRef} >

          <ul className='navLinkDiv' >
          <li><Link to ='./' className='link' >Home</Link></li>
          <li><Link to ='/about' className='link' >About </Link></li>
          <li><Link to ='/menu' className='link'  > Menu</Link></li>
          <li><Link to ='/reservations' className='link' > Reservations</Link></li>
          <li><Link to ='/orderOnline'className='link' > Order Online</Link></li>
          <li><Link to ='/login' className='link' >Login </Link></li>

        </ul>

        <button className='nav-btn nav-close-btn' onClick={showMenu} >
          <FaTimes/>
        </button>

      </nav>

      <button className='nav-btn' onClick={showMenu} >
          <FaBars/>
        </button>
    </header>
  )
  }

export default Nav