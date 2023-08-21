import React from "react";
import "./Product.scss";
import Plus from "../../images/icon-plus.svg";
import Minus from "../../images//icon-minus.svg";
import { cartCheckoutData } from "../../Helper/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Product = ({
  MainImage,
  productsImage,
  setValue,
  value,
  toggleModal,
  quantity,
  increase,
  reduceItem,
  addToCart,
  navLeft,
  navRight,
}) => {
  return (
    <div className="product">
      <div className="left">
        <img
          src={MainImage}
          alt="MainImage"
          className="MainImage"
          onClick={toggleModal}
        />

        <div className="slider">
        <div className="naviIcon left" onClick={navLeft}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>

            <div className="naviIcon" onClick={navRight}>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
        </div>

        <ul className="imgThumbnailsWrapper">
          {productsImage.map((item, index) => (
            <li
              className={`wrap ${value == index ? "active" : ""}`}
              key={item.id}
              onClick={() => setValue(index)}
            >
              <img src={item.ThumImage} alt="thumbImage" />
            </li>
          ))}
        </ul>
      </div>

      <div className="right">
        <h1>Sneaker company</h1>
        <h2>Fall limited edition sneakers</h2>
        <p>
          Theselow-profile sneakers are your bertect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>

        <div className="info">
        <h3>
          ${cartCheckoutData.price * cartCheckoutData.discount}.00 <span>50%</span>
        </h3>
        <h4>${cartCheckoutData.price}.00</h4>
        </div>
     

        <div className="btnsWrapper">
          <div className="leftBtnWrapper">
            <img src={Minus} alt="img" onClick={reduceItem} />
            <span>{quantity}</span>
            <img src={Plus} alt="img" onClick={increase} />
          </div>

          <button className="add" onClick={addToCart}>
            <img
              src="https://img.icons8.com/sf-regular/48/FFFFFF/shopping-cart.png"
              alt="shopping-cart"
            />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
