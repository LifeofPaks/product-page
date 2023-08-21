import { useRef, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import ProductModal from "./components/ProductModal/ProductModal";

import { imageData } from "../src/Helper/data";

function App() {
  const [productsImage] = useState(imageData);
  const [value, setValue] = useState(0);
  const [modalActive, setModalAvtive] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [openCart, setOpenCart] = useState(false);
  const [isEmptyCart, setIsEmptyCart] = useState(true);
  const [cartItems, setCartItems] = useState(0);
  const [isNotEmpty, setIsNotEmpty] = useState(false);
  const [showMenu, setShowMenu] = useState(false)

  // TOGGLE MODAL FUNCTION

  const toggleModal = () => {
    setModalAvtive(!modalActive);
  };

  // NAVIGATE IMAGE SLIDE FUNCTION
  const navLeft = () => {
    const productsImageLength = productsImage.length - 1;
    if (value == 0) {
      setValue(productsImageLength);
    } else {
      setValue(value - 1);
    }
  };

  const navRight = () => {
    const productsImageLength = productsImage.length - 1;

    if (value == productsImageLength) {
      setValue(0);
    } else {
      setValue(value + 1);
    }
  };

  // QUANTITY ADJUSTMENT FUNCTIONS

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const reduceItem = () => {
    if (quantity == 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  // TOGGLE OPEN/CLOSE CART FUNCTION
  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  // CART STATUS FUNCTION

  const noCartItem = () => {
    setIsEmptyCart(true);
      setIsNotEmpty(false)
      
  };

  const addToCart = ()=>{
    setIsNotEmpty(true)
    setCartItems(quantity)
    setIsEmptyCart(false)
  }

  // TOGGLE MOBILE MENU FUNCTION
  const toggleMobileMenu = () =>{
    setShowMenu(!showMenu)
  }


  const MainImage = productsImage[value].DisplayImage;

  return (
    <div className="App">
      <Navbar
        toggleCart={toggleCart}
        openCart={openCart}
        isEmptyCart={isEmptyCart}
        noCartItem={noCartItem}
        cartItems={cartItems}
        isNotEmpty={isNotEmpty}
        quantity={quantity}
        toggleMobileMenu={toggleMobileMenu}
        showMenu={showMenu}
      />

      <Product
        MainImage={MainImage}
        productsImage={productsImage}
        setValue={setValue}
        value={value}
        modalActive={modalActive}
        toggleModal={toggleModal}
        quantity={quantity}
        increase={increase}
        reduceItem={reduceItem}
        addToCart={addToCart}
        navLeft={navLeft}
        navRight={navRight}
      />

      <ProductModal
        MainImage={MainImage}
        productsImage={productsImage}
        setValue={setValue}
        value={value}
        modalActive={modalActive}
        toggleModal={toggleModal}
        navLeft={navLeft}
        navRight={navRight}
      />
    </div>
  );
}

export default App;
