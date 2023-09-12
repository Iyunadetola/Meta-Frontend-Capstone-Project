import React from 'react'
import logo from '../images/logo-white.png'
import { FaFacebook, FaTwitterSquare, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import location from '../images/locations.png'
import dial from '../images/dial.png'
import mail from '../images/mail.png'
import '../App.css'

const Footer = () => {
  return (
    <div className='footer' >
      <div className='footerLogo' >
        <Link to='./'><img className='footerlogo' src={logo} alt="" /></Link>
      </div>
      <div>
          <div className='footerDivLink' >
            <h3>SITEMAP</h3>
            <div className='footerLink' >
              <Link to='./' className='footerHome' >Home</Link>
              <br />
              <Link to='/about' className='footerHome' >About</Link>
              <br />
              <Link to='/menu' className='footerHome' >Menu</Link>
              <br />
              <Link to='/reservations' className='footerHome' >Reservations</Link>
              <br />
              <Link to='/orderOnline' className='footerHome' >Order Online</Link>
              <br />
              <Link to='/login' className='footerHome' >Login</Link>
            </div>
          </div>
      </div>
      <div className='footerContactUs' >
        <h3>CONTACT US</h3>
        <div className='footerContactdiv location ' >
          <div>
          <img src={location} className='footerContactImg' alt="" />
          </div>
          <div>
          <p>678 Pisa Ave, Chicago, IL 60611</p></div>
          </div>
        <div className='footerContactdiv' >
          <div><img src={dial} className='footerContactImg' alt="" /></div>
          <div><p>(312) 523-2744</p></div>
        </div>
        <div className='footerContactdiv' >
          <div><img src={mail} className='footerContactImg' alt="" /></div>
          <div> <p>customer@littlelemon.com</p></div>
          </div>
      </div>
      <div className='footerConnect' >
        <h3>CONNECT WITH US</h3>
        <div className='footerLinksDiv' >
        <Link className='footerSocials' ><FaFacebook/></Link>
        <Link className='footerSocials' ><FaTwitterSquare/></Link>
        <Link className='footerSocials' ><FaInstagram/></Link>
        <Link className='footerSocials' ><FaYoutube/></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer