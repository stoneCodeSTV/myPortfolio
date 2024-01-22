import React from 'react'
import './header.css'
import CVC from './CVC'
import youngerMe from '../../assets/youngerMe.JPG' 
import Grid from './Grid'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Steeve Tassy</h1>
        <h5 className='text-light'> Developper in Training </h5>
          <CVC/>
          <Grid/>

        <div className='youngerMe'>
          <img src={youngerMe} alt='Younger Me'/>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header