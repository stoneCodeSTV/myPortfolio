import React from 'react'
import './about.css'
import youngMe from '../../assets/youngMe.jpg' 
import {FaAward} from "react-icons/fa"
import {FaUsers} from "react-icons/fa"
import {FaFolderTree} from "react-icons/fa6"

const About = () => {
  return (
    <section id='about'>
      <h5>A Few Things</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={youngMe} alt='Young Me'/>
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
              <article className='about_card'>
                <FaAward className='about_icon'/>
                  <h5> Experience </h5>
                <small> 6+ Months Learning Experience</small>
            </article>

              <article className='about_card'>
                <FaUsers className='about_icon'/>
                  <h5> Clients </h5>
                <small> 5+ Worldwide</small>
              </article>

              <article className='about_card'>
                <FaFolderTree className='about_icon'/>
                  <h5> Projects </h5>
                <small>10+ Completed Projects and Counting</small>
            </article>
          </div>

        <p> I started my Software Journey in February of 2023</p>
        <a href='#contact' className='btn btn-primary'>Let's Chat</a>
        </div>
      </div>
    </section>
    
  )
}

export default About