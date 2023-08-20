import { useRef, useState } from "react";
import "./App.scss";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import EmptyCart from "./components/EmptyCart/EmptyCart";
import ProductModal from "./components/ProductModal/ProductModal";
import MainImage1 from "../src/images/image-product-1.jpg";
import MainImage2 from "../src/images/image-product-2.jpg";
import MainImage3 from "../src/images/image-product-3.jpg";
import MainImage4 from "../src/images/image-product-4.jpg";

function App() {
  const [imageIndex, setImageIndex] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  const [openCart, setOpenCart] = useState(false)
  const [cartIsEmpty, setCartIsEmpty] = useState(false)

  const navigation = useRef();

  const productImages = [MainImage1, MainImage2, MainImage3, MainImage4];
  const productImagesLength = productImages.length

  const imageChange = (e) => {
    setImageIndex(e.currentTarget.dataset.index);

    let children = navigation.current.children;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.classList.remove("active");
    }

    e.currentTarget.classList.add("active");
  };

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  const navLeft = () => {
    
    if(imageIndex === 0){
      setImageIndex(0)
    } else{
      setImageIndex(imageIndex - 1)
    }

  };

  const navright = () => {

    if(imageIndex === productImagesLength - 1 ){
      setImageIndex(productImagesLength - 1)
    }
    else{

      setImageIndex(imageIndex + 1)
    }
  };

  const toggleCart = ()=>{
    setOpenCart(!openCart)
  }

  const isEmptyCart = () =>{
    setCartIsEmpty(true)
  }

  return (
    <div className="App">
      <Navbar toggleCart={toggleCart} />
      <Product
        imageIndex={imageIndex}
        navigation={navigation}
        imageChange={imageChange}
        toggleModal={toggleModal}
        productImages={productImages}
        openCart={openCart}
        isEmptyCart={isEmptyCart}
        cartIsEmpty={cartIsEmpty}
      />

      <ProductModal
        imageIndex={imageIndex}
        navigation={navigation}
        imageChange={imageChange}
        modalActive={modalActive}
        toggleModal={toggleModal}
        navLeft={navLeft}
        navright={navright}
        productImages={productImages}
      />
    </div>
  );
}

export default App;
