import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';


const Navbar= () => {
  return (
    <nav className='container'>
        <img src={logo} alt ="" className='logo'/>
        <ul>
            <li><Link to ='Suyog' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to ='Program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to ='About' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to ='College' smooth={true} offset={-260} duration={500}>College</Link></li>
            <li><Link to ='Contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar