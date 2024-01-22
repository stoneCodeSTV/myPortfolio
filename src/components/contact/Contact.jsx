import React from 'react'
import './contact.css'
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {SiWhatsapp} from "react-icons/si"
import {useRef} from 'react' /* For EmailJS */
import emailjs from 'emailjs-com' 




const Contact = () => {

  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cfb6zy8', 'template_w74oscp', form.current, '19TYwyDHoT_qHXnP0')
      e.target.reset()
};

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdEmail className='contact_option-icon'/>
              <h4>Email</h4>
                <h5>steeve.tassy@gmail.com</h5>
                  <a href='mailto:steeve.tassy@gmail.com' target='__blank'>Send A Message</a>
          </article>

          <article className='contact_option'>
            <BsMessenger className='contact_option-icon'/>
              <h4>Messenger</h4>
                <h5>Tas Stv</h5>
                  <a href='https://m.me/10ne.w01ff' target='__blank'>Send A Message</a>
          </article>

          <article className='contact_option'>
            <SiWhatsapp className='contact_option-icon'/>
              <h4>WhatsApp</h4>
              <h5>438-3**-****</h5>
                <a href='https://api.whatsapp.com/send?phone=+14383892688' target='__blank'>Send A Message</a>
          </article>

        </div>


        {/*End of Contact Options*/}
          <form ref={form} onSubmit={sendEmail}>
              <input type='text' name='name' placeholder='Your Full Name' required/>
                <input type='email' name='email' placeholder='Your Email' required/>
                  <textarea name='message' rows={7} placeholder='Your Message' required  />
                    <button className='btn btn-primary' type='submit'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact