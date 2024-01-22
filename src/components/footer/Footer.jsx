/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import logo from '../../assets/favIcon2.png'
import {BsTwitterX} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"

const Footer = () => {
  return (
    <section id='footer'>
      <footer>
        <img className='footer_logo' src={logo} alt='Logo'/>

        <ul className='links'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#testimonials'>Testimonials</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className='footer_socials'>
          <a href='https://facebook.com' target='__blank'><BsFacebook/></a>
          <a href='https://instagram.com' target='__blank'><BsInstagram/></a>
          <a href='https://twitter.com' target='__blank'><BsTwitterX/></a>
        </div>

        <div className='footer_copyright'>
          <small>
          &copy; 2023 Steeve Tassy Designed | All rights reserved.
          </small> 
        </div>
      </footer>
    </section>
  )
}

export default Footer