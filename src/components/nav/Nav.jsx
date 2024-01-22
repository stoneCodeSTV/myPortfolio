/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import {IoHomeOutline} from "react-icons/io5";
import {TbUserQuestion} from "react-icons/tb";
import {GiBookshelf} from "react-icons/gi";
import {BsTools} from "react-icons/bs";
import {HiOutlineChatBubbleLeftRight} from "react-icons/hi2";
import {useState} from 'react' // to modify active icons on NavBar  

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href='#'
          onClick={() => setActiveNav('#')} 
          className ={activeNav === '#' ? 'active' : ''}>
          <IoHomeOutline/>
        </a>

        <a href='#about' 
          onClick={() => setActiveNav('#about')} 
          className={activeNav === '#about' ? 'active' : ''}> 
          <TbUserQuestion/>
        </a>

        <a href='#experience'
          onClick={() => setActiveNav('#experience')} 
          className={activeNav === '#experience' ? 'active' : ''}>
          <GiBookshelf/>
        </a>

        <a href='#services' onClick={() => setActiveNav('#services')} 
          className={activeNav === '#services' ? 'active' : ''}>
          <BsTools/>
        </a>

        <a href='#contact'onClick={() => setActiveNav('#contact')} 
          className={activeNav === '#contact' ? 'active' : ''}>
          <HiOutlineChatBubbleLeftRight/>
        </a>
    </nav>
  )
}

export default Nav