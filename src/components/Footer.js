import React from 'react';


let currentYear = new Date();
let thisYear = currentYear.getFullYear()

const Footer = () => {
  return (
    <div className='footerContainer'>
      <p>&copy; {thisYear} Maggie Made It</p>
    </div>
  )
}


export default Footer
