import React from "react";
import "./Product.scss";
import Plus from "../../images/icon-plus.svg";
import Minus from "../../images//icon-minus.svg";
import Cart from "../Cart/Cart";
import EmptyCart from "../EmptyCart/EmptyCart";

const Product = ({
  MainImage,
  productsImage,
  setValue,
  value,
  toggleModal,
  quantity,
  increase,
  reduceItem,
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
        <h3>
          $125.00 <span>50%</span>
        </h3>
        <h4>$250.00</h4>

        <div className="btnsWrapper">
          <div className="leftBtnWrapper">
            <img src={Minus} alt="img" onClick={reduceItem}/>
            <span>{quantity}</span>
            <img src={Plus} alt="img" onClick={increase} />
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
    </div>
  );
};

export default Product;
