import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import { BsDribbble } from "react-icons/bs"

const Grid = () => {
  return (
    <div className='grid'> 
        <a href='https://linkedin.com/in/steeve-tassy' target='__blank'><BsLinkedin /></a>
        <a href='https://github.com/2395011' target='__blank'><BsGithub /></a>
        <a href='https://dribbble.com' target='__blank'><BsDribbble /></a>
        
    </div>
  )
}

export default Grid