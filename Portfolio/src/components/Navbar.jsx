import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navlink'>
        <p className='logo' >OLUMIDE</p>
        <ul>
            <Link className='link' to= '/' ><li>Home</li></Link>  
            <Link className='link' to= '/services' ><li>Services</li></Link>
            <Link className='link' to= '/projects' ><li>Projects</li></Link>
            <Link className='link' to= '/contact' ><li>Contact</li></Link>
        </ul>
        <p className='number' >  +234 8067199479 </p>
    </div>
  )
}

export default Navbar