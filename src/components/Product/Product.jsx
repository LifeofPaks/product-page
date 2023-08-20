import React from "react";
import "./Product.scss";
import Image1 from "../../images/image-product-1-thumbnail.jpg";
import Image2 from "../../images/image-product-2-thumbnail.jpg";
import Image3 from "../../images/image-product-3-thumbnail.jpg";
import Image4 from "../../images/image-product-4-thumbnail.jpg";
import Plus from "../../images/icon-plus.svg";
import Minus from "../../images//icon-minus.svg";
import Cart from "../Cart/Cart";
import EmptyCart from "../EmptyCart/EmptyCart";

const Product = ({ imageIndex, navigation, imageChange, toggleModal, productImages, openCart,isEmptyCart,
  cartIsEmpty }) => {
    
  return (
    <div className="product">
      <div className="left">
        <img
          src={productImages[imageIndex]}
          alt="MainImage"
          className="MainImage"
          onClick={toggleModal}
        />

        <div className="imgThumbnailsWrapper" ref={navigation}>
          <div className="wrap active" data-index={0} onClick={imageChange}>
            <img
              data-index={0}
              src={Image1}
              alt="Image1"
              onClick={imageChange}
            />
          </div>
          <div className="wrap" data-index={1} onClick={imageChange}>
            <img src={Image2} alt="Image2" />
          </div>

          <div className="wrap" data-index={2} onClick={imageChange}>
            <img src={Image3} alt="Image3" />
          </div>

          <div className="wrap" data-index={3} onClick={imageChange}>
            <img src={Image4} alt="Image4" />
          </div>
        </div>
      </div>

      <div className="right">
        <h1>Sneaker company</h1>
        <h2>Fall limited edition sneakers</h2>
        <p>
          Theselow-profile sneakers are your bertect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <h3>
          $125.00 <span>50%</span>
        </h3>
        <h4>$250.00</h4>

        <div className="btnsWrapper">
          <div className="leftBtnWrapper">
            <img src={Minus} alt="img" />
            <span>0</span>
            <img src={Plus} alt="img" />
          </div>

          <button className="add">
            <img
              src="https://img.icons8.com/sf-regular/48/FFFFFF/shopping-cart.png"
              alt="shopping-cart"
            />
            <span>Add to cart</span>
          </button>
        </div>
      </div>

      {
        openCart && <Cart isEmptyCart={isEmptyCart}/>
      }

      {
        openCart && cartIsEmpty && <EmptyCart/>
      }
    </div>
  );
};

export default Product;
