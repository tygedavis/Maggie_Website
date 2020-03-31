import React from 'react';
import '../styles/About.css';

//Images
import maggie from '../img/maggieWoodBack.jpg';

const About = () => {
  return (
    <div className='aboutContainer' id='aboutPage'>
      <div className='imgMaggie'>
        <img src={maggie} alt='Maggie' />
      </div>
      <div className='aboutMe'>
        <h4>About Me</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maxime accusantium sit explicabo accusamus maiores doloremque qui dolore tempore magni dolor, odio velit vel, excepturi sequi neque atque nisi expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos incidunt sequi voluptate quisquam eveniet, repellendus tempora quas voluptates? Inventore nisi fugiat nobis impedit nostrum dicta, necessitatibus vitae minus earum maiores!</p>
        <a href='#contactContainer'><button>Contact Me</button></a>
      </div>
    </div>
  )
}

export default About;
