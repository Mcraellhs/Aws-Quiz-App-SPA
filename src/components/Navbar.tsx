
import React, { CSSProperties, useEffect, useState } from 'react'
import '../css/navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isToggledNavbar,setToggleNavbar]=useState(false);
  
  const customNavStyle:CSSProperties={
    display: 'grid',
    gridTemplateColumns: '1fr',
    position: 'sticky',
    top: 0,
    zIndex: 3,
    opacity: 0.8,
    backgroundColor: 'black',
  }
  
  useEffect(() => {
    const handleWindowResize = () => {
      if(window.innerWidth>631){
        setToggleNavbar(false)
      }
    };

    window.addEventListener('resize', handleWindowResize);
    

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  function handleHamburgerClick(): void {
    const newState = !isToggledNavbar;
    setToggleNavbar(newState)
  }

  return (
   <>
   
   <div className='hamburger-icon' onClick={handleHamburgerClick}>
       {!isToggledNavbar? <img src="/images/hamb.png" alt="notfound" />:
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1200px-Grey_close_x.svg.png" alt="" />
       }
      </div>
    <div className='navbar' style={isToggledNavbar?customNavStyle:{}}>
    
          <Link to={''} className="logo nav-section" >
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
   </>
  )
}
