import React from 'react';
import Link from 'next/link';
import {PiShoppingCart} from 'react-icons/pi';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">Merch</Link>
      </p>
      <button type='button' className='cart-icon'>
        <PiShoppingCart />
        <span className='cart-item-qty'>1</span>
      </button>
      
    </div>
  )
}

export default Navbar
