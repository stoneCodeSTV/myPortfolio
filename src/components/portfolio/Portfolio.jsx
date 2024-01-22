import React from 'react'
import './portfolio.css'
import Lock from '../../assets/lock.jpg' 

const Portfolio = () => {
  return (
      <section id='portfolio'>
        <h5>My Recent Projects</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio_container'>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={Lock} alt='SafePlace'/>
                <h3>SafePlace</h3>
                <h6>Password Generator</h6>
                  <div className='portfolio_item-btn'>
                  <a href='https://github.com' className='btn' target='__blank'>Project Link</a>
                  <a href='https://github.com' className='btn btn-primary' target='__blank'>Live Demo</a>
                  </div>
            </div>
          </article>

          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={Lock} alt='Cli Mate'/>
                <h3>Cli Mate</h3>
                <h6>Weather App</h6>
                  <div className='portfolio_item-btn'>
                    <a href='https://github.com' className='btn' target='__blank'>Project Link</a>
                    <a href='https://github.com' className='btn btn-primary' target='__blank'>Live Demo</a>
                  </div>
            </div>
          </article>

          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={Lock} alt='GiftShop'/>
                <h3>GiftShop</h3>
                <h6>E-Commerce Website</h6> 
                  <div className='portfolio_item-btn'>
                    <a href='https://github.com' className='btn' target='__blank'>Project Link</a>
                    <a href='https://github.com' className='btn btn-primary' target='__blank'>Live Demo</a>
                  </div>
            </div>
          </article>

          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={Lock} alt='CareCycle'/>
                <h3>CareCycle</h3>
                <h6>Web Application</h6>
                  <div className='portfolio_item-btn'>
                    <a href='https://github.com/2395011/orangeTeamProject1' className='btn' target='__blank'>Project Link</a>
                    <a href='https://github.com' className='btn btn-primary' target='__blank'>Live Demo</a>
                  </div>
            </div>
          </article>

          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={Lock} alt="Listen In"/>
                <h3>Listen In</h3>
                <h6>Music App Database</h6>
                  <div className='portfolio_item-btn'>
                    <a href='https://github.com/2395011/DataGripSQL' className='btn' target='__blank'>Project Link</a>
                    <a href='https://github.com' className='btn btn-primary' target='__blank'>Live Demo</a>
                  </div>
            </div>
          </article>

          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={Lock} alt='Cli Mate'/>
                <h3>OpenBook</h3>
                <h6>Desktop Application</h6>
                  <div className='portfolio_item-btn'>
                    <a href='https://github.com/2395011/AppDevProj' className='btn' target='__blank'>Project Link</a>
                    <a href='https://github.com' className='btn btn-primary' target='__blank'>Live Demo</a>
                  </div>
            </div>
          </article>
        </div>


      </section>
  )
}

export default Portfolio