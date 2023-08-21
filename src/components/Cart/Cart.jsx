import React from 'react'
import './Cart.scss'
import productImage from '../../images/image-product-1-thumbnail.jpg'
import Trash from '../../images/icon-delete.svg'
import {cartCheckoutData} from '../../Helper/data'

const {price, discount} = cartCheckoutData
const currentPrice = price * discount

const Cart = ({noCartItem, quantity, cartItems}) => {
  return (
    <div className='cart'>
        <h1>Cart</h1>
        <div className="cartInfo">
            <img src={productImage} alt="image" className='productImage'/>
            <div className="proDesc">
                <h2>Fall Limited Edition Sneakers</h2>
                <p>${currentPrice} x {quantity}  <span> ${currentPrice * quantity}</span></p> 
            </div>

            <img src={Trash} alt="trash" className="trash" onClick={noCartItem} />
        </div>
            
        <div className="buttonWrapper">
        <button>Checkout</button>
        </div>
    </div>
  )
}

export default Cart