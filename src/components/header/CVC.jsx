import React from 'react'
import CVEN from '../../assets/CV2023_En.pdf'
import CVFR from '../../assets/CV2023_Fr.pdf'


const CVC = () => {
  return (
    <div className='cvc'>
        <a href={CVFR} download className='btn'>Télécharge CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        <a href={CVEN} download className='btn'>Download CV</a>
    </div>
  )
}


export default CVC