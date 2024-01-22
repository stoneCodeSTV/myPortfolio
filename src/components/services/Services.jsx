import React from 'react'
import './services.css'
import { HiMiniCheck } from "react-icons/hi2"

const Services = () => {
  return (
    <section id='services'>
      <h5>How May I Help</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  User Research
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Information Architecture
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Prototyping
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Responsive Design
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Visual Design
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Continuous Improvement
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Etc.
                </p>
            </li>
          </ul>
        </article>
{/* End UI/UX */}

<article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Full-Stack Development
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Web Application Development
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  E-Commerce Development
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  API Development
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Web Hosting & Deployment
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Maintenance & Support
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Etc.
                </p>
            </li>
          </ul>
        </article>
{/* End Web Design */}

<article className='service'>
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Copywriting
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Blog Writing
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Social Media Content Creation
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Search Engine Optimization (SEO): 
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Email Newsletter Creation
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Content Distribution
                </p>
            </li>

            <li>
              <HiMiniCheck className='service_list-icon'/>
                <p>
                  Etc.
                </p>
            </li>
          </ul>
        </article>
{/* End */}
      </div>
    </section>
  )
}

export default Services