import React from 'react'
import './Navbar.scss'
import Logo from '../../images/logo.svg'
import Avatar from '../../images/image-avatar.png'
import CartIcon from '../../images/icon-cart.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
        <div className="left">
            <img src={Logo} alt="logo" className="logo" />
            
            <ul className="navLinks">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="right">
            <div className="cartIconWrapper">
                <img src={CartIcon} alt="cartIcon" />
                <span>3</span>
            </div>

            <img src={Avatar} alt="avatar" className='avatar'/>
        </div>
        </div>
     
    </div>
  )
}

export default Navbar