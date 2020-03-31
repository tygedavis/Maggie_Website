import React from 'react';
import '../styles/Home.css';

//Components


//Icons
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Home = () => {
  return (
    <div className='homeContainer' id='homePage'>
      <div className='mainBanner'>
        <h3>Hello!</h3>
        <h1>I'm Maggie Davis</h1>
        <div className='homeIcons'>
          <InstagramIcon className='icon' fontSize='large' />
          <FacebookIcon className='icon'  fontSize='large' />
        </div>
      </div>
      <div className='homeDownArrow'>
        <a href='#aboutPage'><KeyboardArrowDownIcon style={{fontSize: 70 }} /></a>
        <p className='tooltipText'>See More!</p>
      </div>
    </div>
  )
}

export default Home;

