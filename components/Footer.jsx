import React from 'react';
import { GrInstagram, GrTwitter } from 'react-icons/gr';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 AnimeMerch All rights reserved</p>
      <p className="icons">
        <GrInstagram />
        <GrTwitter />
      </p>
    </div>
  )
}

export default Footer
