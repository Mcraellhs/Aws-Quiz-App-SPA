
import React from 'react'
import '../css/navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo nav-section">
          <img src="https://mti.com/wp-content/uploads/2021/04/Amazon-Web-Services-Logo-White.png" alt="" />
        </div>
        <div className="about nav-section">
        About  
        </div>
        <div className="exams nav-section">
       AWS Exams  
        </div>
        <div className="socials nav-section">
        Socials
        </div>
        <div className="contact nav-section">
        Contact  
        </div>
        
    </div>
  )
}
