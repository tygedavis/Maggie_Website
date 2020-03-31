import React from 'react';
import '../styles/Services.css';
import setTableInRoom from '../img/setTableInRoom.jpg';

const Services = () => {
  return (
    <div className='servicesContainer' id='servicesPage'>
      <div className='servicesTextContainer'>
        <h4>What I Can Do For You</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati vitae a veritatis tempore officia ipsum? Quod esse dolore dicta autem sequi repellendus nisi, molestiae quidem atque. Quisquam esse vitae accusantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis mollitia quia amet! Quibusdam consequuntur necessitatibus praesentium cumque! Deleniti similique inventore impedit? Doloribus consectetur optio alias dicta laboriosam quidem sed esse.</p>
        <a href='#'><button>See My Work</button></a>
      </div>
      <div className='servicesImgContainer'>
        <img src={setTableInRoom} alt="Set table in room" />
      </div>
    </div>
  )
}

export default Services;
