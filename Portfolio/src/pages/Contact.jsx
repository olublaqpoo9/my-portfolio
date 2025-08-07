import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-page' >
      <div className='contact-top' >
        <h1>CONTACT US</h1>
        <p>Contact us for support, questions, or feedback <br /> We're here to help </p>
      </div>
      <div className='contact-bottom' >
        <div className='call'>
          <img width={35} src="./phone.png" alt="" />
          <p> <b>Call us</b> </p>
          <p></p>
          <p> +234 8067199478</p>
        </div>

          <div className='contact'>
          <img width={35} src="./email.png" alt="" />
          <p> <b>Email Address</b> </p>
          <p></p>
          <p> olumideogunleye2002@gmail.com </p>
        </div>

          <div className='whatsapp'>
          <img width={35} src="./phone.png" alt="" />
          <p> <b>Whatsapp</b> </p>
          <p></p>
          <p> +234 8067199478</p>
        </div>

      </div>
    </div>
  )
}

export default Contact