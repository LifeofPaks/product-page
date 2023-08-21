import React from "react";
import "./Navbar.scss";
import Logo from "../../images/logo.svg";
import Avatar from "../../images/image-avatar.png";
import CartIcon from "../../images/icon-cart.svg";
import Hamburger from "../../images/icon-menu.svg";
import Close from "../../images/icon-close.svg";
import Cart from "../Cart/Cart";
import EmptyCart from "../EmptyCart/EmptyCart";

const Navbar = ({
  toggleCart,
  openCart,
  isEmptyCart,
  noCartItem,
  cartItems,
  quantity,
  isNotEmpty,
  toggleMobileMenu,
  showMenu,
}) => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <img src={Hamburger} alt="hamburger" className="hamburger" onClick={toggleMobileMenu}/>
        <div className="left">
          <img src={Logo} alt="logo" className="logo" />

          <div className={`navLinksModal ${showMenu ? 'toggleMenu' : ''}`}>
            <ul className="navLinks">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <img src={Close} alt="close" className="close" onClick={toggleMobileMenu} />
          </div>
        </div>
        <div className="right">
          <div className="cartIconWrapper">
            <img src={CartIcon} alt="cartIcon" onClick={toggleCart} />
            {isNotEmpty && <span>{cartItems}</span>}
          </div>

          <img src={Avatar} alt="avatar" className="avatar" />
        </div>
      </div>

      {openCart && <Cart noCartItem={noCartItem} quantity={quantity} />}

      {openCart && isEmptyCart && <EmptyCart />}
    </div>
  );
};

export default Navbar;
