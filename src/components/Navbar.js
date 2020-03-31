import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='navContainer'>
      <div className='logoContainer'>
        {/* TODO: Get a logo up in here */}
      </div>
      <div className='navLinksContainer'>
        <p className='link'><a href='#homePage'>Home</a></p>
        <p className='link'><a href='#aboutPage'>About</a></p>
        <p className='link'><a href='#servicesPage'>Services</a></p>
        {/* <p className='link'><a href='#'>Work</a></p> */}
        {/* <p className='link'><a href='#'>Clients</a></p> */}
        <p className='link'><a href='#contactContainer'>Contact</a></p>
      </div>
    </div>
  )
}

export default Navbar;
