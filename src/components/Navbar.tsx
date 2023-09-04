
import React from 'react'
import '../css/navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
          <Link to={''} className="logo nav-section">
          <img src="https://mti.com/wp-content/uploads/2021/04/Amazon-Web-Services-Logo-White.png" alt="" />
          </Link>
        <Link to={'about'} className='about nav-section'>
           About  
        </Link>
        <Link className="exams nav-section" to={'aws-exams'}>
          AWS Exams  
        </Link>
        <Link  className="socials nav-section" to={'socials'}>
          Socials
        </Link>
        <Link className="contact nav-section" to={'contact'}>
          Contact  
        </Link>
        
    </div>
  )
}
