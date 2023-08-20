import React, { useEffect, useRef } from "react";
import "./ProductModal.scss";
import Image1 from "../../images/image-product-1-thumbnail.jpg";
import Image2 from "../../images/image-product-2-thumbnail.jpg";
import Image3 from "../../images/image-product-3-thumbnail.jpg";
import Image4 from "../../images/image-product-4-thumbnail.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const ProductModal = ({
  imageIndex,
  navigation,
  imageChange,
  modalActive,
  toggleModal,
  navLeft,
  navright,
  productImages
}) => {

  return (
    modalActive && (
      <div className="modal">
        <div className="container">
          <div className="imgWrapper">
            <img
              src={productImages[imageIndex]}
              alt="MainImage"
              className="MainImage"
            />

            <div className="naviIcon left" onClick={navLeft}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>

            <div className="naviIcon" onClick={navright}>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>

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
        <FontAwesomeIcon
          icon={faXmark}
          className="closeIcon"
          onClick={toggleModal}
        />
      </div>
    )
  );
};

export default ProductModal;
