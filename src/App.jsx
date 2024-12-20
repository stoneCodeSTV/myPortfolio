import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Api1 from './components/Apis/Api1'






const App = () => {

  

  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Api1/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App