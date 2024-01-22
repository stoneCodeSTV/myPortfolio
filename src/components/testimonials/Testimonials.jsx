import React from 'react'
import "./testimonials.css"
import client1 from "../../assets/testimonial_client1.jpg"
import client2 from "../../assets/testimonial_client2.jpg"
import client3 from "../../assets/testimonial_client3.png"

// import Swiper core and required modules
import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'

            // install Swiper modules
            modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={client1} alt='Happy Customer'/>
          </div>
            <h5 className='client_name'>Freddy Cruiser</h5>
              <small className='client_review'>
                Took the time to understand my situation and was flexible with all my demands
              </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={client2} alt='Happy Customer'/>
          </div>
            <h5 className='client_name'>Jason Times</h5>
              <small className='client_review'>
                Detail oriented, rare you can find great service tailored to my needs 
              </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={client3} alt='Happy Customer'/>
          </div>
            <h5 className='client_name'>Myst B. Hayve</h5>
              <small className='client_review'>
                My business increased 25% productivity and 15% in revenue after adding his custom made app.   
              </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials