import React from 'react'
import './navStyles.css'
import royalLogo from '../assets/royal_logo__blue.png'
import { Menu } from 'lucide-react';
import {Link} from 'react-router'

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className="nav-logo">
        <Link to="/">
          <img src={royalLogo} alt="" />
        </Link>
        <h1>Royal Productions</h1>
      </div>
      <div className="nav-menu">
        <h1>Menu</h1>
        <button id='menu-button'>
        <Menu size={24} />
        </button>
      </div>

    </div>
  )
}

export default Nav
