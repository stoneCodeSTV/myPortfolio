import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have Aquired</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
            <div className='experience_content'>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>Bootstrap</h4>
                  </div>
                    <small className='text-light'>Intermediate</small>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>CSS</h4>
                  </div>
                    <small className='text-light'>Experienced</small>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>HTML</h4>
                  </div>
                    <small className='text-light'>Experienced</small>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>JavaScript</h4>
                  </div>
                    <small className='text-light'>Intermediate</small>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>ReactJS</h4>
                  </div>
                    <small className='text-light'>Beginner</small>
              </article>
            </div>
        </div>

        <div className='experience_backend'>
          <h3>Backend Development</h3>
            <div className='experience_content'>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>C#</h4>
                  </div>
                    <small className='text-light'>Intermediate</small>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>ExpressJS</h4>
                  </div>
                    <small className='text-light'>Beginner</small>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>Java</h4>
                  </div>
                    <small className='text-light'>Experienced</small>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>Kotlin</h4>
                  </div>
                    <small className='text-light'>Beginner</small>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>NodeJS</h4>
                  </div>
                    <small className='text-light'>Beginner</small>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>PostgreSQL</h4>
                  </div>
                    <small className='text-light'>Beginner</small>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>Python</h4>
                  </div>
                    <small className='text-light'>Beginner</small>
              </article>
            </div>
          </div>
        </div>
      </section>
    )
  }

export default Experience