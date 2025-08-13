import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <div className='project-page' >
          <div className='project-headline'>
            <h1>MY PROJECTS</h1>
            <p>Here are some of the projects i've built using technologies like React,HTML5, external css, and Javascript.  Each one helped me grow as a developer and they showcase what i can build  for clients and teams. </p>
        </div>
        <div className='project-section'>
          <div className='project-div'>
              <div className='project1'>
                  <img id='img1' width={1000} src="./campusmart.png" alt="" />
                  <h2>CampusMart</h2>
                  <p><b>Description :</b> A modern e-commerce website for students to buy groceries on campus</p>
                  <p><b>Tools:</b>React - External CSS - VS code - Chrome dev tools</p>
                  <p><b>View Live:</b> <a href="">CampusMart</a> </p>
                  <p><b>View Code:</b> <a href="">GitHub repo</a> </p>
              </div>
              <div className='project2'>
                  <img id='img2' width={1000} src="./campusmart.png" alt="" />
                  <h2>CampusMart</h2>
                  <p><b>Description :</b> A modern e-commerce website for students to buy groceries on campus</p>
                  <p><b>Tools:</b>React - External CSS - VS code - Chrome dev tools</p>
                  <p><b>View Live:</b> <a href="">CampusMart</a> </p>
                  <p><b>View Code:</b> <a href="">GitHub repo</a> </p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Project