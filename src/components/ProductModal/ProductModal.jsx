import React from "react";
import "./ProductModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const ProductModal = ({
  MainImage,
  productsImage,
  setValue,
  value,
  modalActive,
  toggleModal,
  navLeft,
  navRight,
}) => {
  return (
    modalActive && (
      <div className="modal">
        <div className="container">
          <div className="imgWrapper">
            <img src={MainImage} alt="MainImage" className="MainImage" />

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
