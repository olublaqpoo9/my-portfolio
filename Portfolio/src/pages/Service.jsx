import React from 'react'
import './Service.css'
const Service = () => {
  return (
    <div className='service-page' >
        <div className='headline'>
            <h1>MY SERVICES</h1>
            <p>I specialize in building fast, responsive, and user-friendly web interfaces. <br /> Here's how i can help bring your ideas to life</p>
        </div>
        <div className='service-sections'>
            <div className='service-card'>
                <div className='card-row1' >
                  <div><h2>Responsive <br />  Web Design</h2> <p>Websites that looks great on phones , tablets and desktops</p> <img width={30} src="./arrow.png" alt="" /> </div>
                  <div> <h2>React Web <br /> Applications</h2> <p>Fast, interactive apss built using React and Modern Javascript.</p> <img width={30} src="./arrow.png" alt="" /> </div>
                  <div> <h2>Landing Page <br /> Development</h2> <p>High - Converting single-page sites for businesses or Campaigns.</p> <img width={30} src="./arrow.png" alt="" /> </div>
                </div>
                <div className='card-row2'>
                  <div> <h2>Website Redesign</h2> <p>Give your old website a modern and responsive facelift.</p> <img width={30} src="./arrow.png" alt="" /> </div>

                  <div> <h2>Figma to Code <br /> Conversion</h2> <p>Pixel-perfect implementation of figma or XD designs</p> <img width={30} src="./arrow.png" alt="" /> </div>

                  <div> <h2>Portfolio <br /> Sites for Clients</h2> <p>Personnal and business portfolios built with clean design animations.</p> <img width={30} src="./arrow.png" alt="" /> </div>
                </div>
            </div>
        </div>
        <div className='tech-stacks'>

        </div>
        <div className='assurance'>

        </div>
    </div>
  )
}

export default Service