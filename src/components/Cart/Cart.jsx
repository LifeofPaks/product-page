import React from 'react'
import './Cart.scss'
import productImage from '../../images/image-product-1-thumbnail.jpg'
import Trash from '../../images/icon-delete.svg'

const Cart = ({isEmptyCart}) => {
  return (
    <div className='cart'>
        <h1>Cart</h1>
        <div className="cartInfo">
            <img src={productImage} alt="image" className='productImage'/>
            <div className="proDesc">
                <h2>Fall Limited Edition Sneakers</h2>
                <p>$125.00 x 3 <span>$375.00</span></p> 
            </div>

            <img src={Trash} alt="trash" className="trash" onClick={isEmptyCart} />
        </div>
            
        <div className="buttonWrapper">
        <button>Checkout</button>
        </div>
    </div>
  )
}

export default Cart