import React from 'react'
import './Product.scss'
import MainImage from '../../images/image-product-1.jpg'
import Image1 from '../../images/image-product-1-thumbnail.jpg'
import Image2 from '../../images/image-product-2-thumbnail.jpg'
import Image3 from '../../images/image-product-3-thumbnail.jpg'
import Image4 from '../../images/image-product-4-thumbnail.jpg'

const Product = () => {
  return (
    <div className='product'>
        <div className="left">
            <div className="mainImgWrapper">
                <img src={MainImage} alt="MainImage" className="MainImage" />
            </div>

            <div className="imgThumbnailsWrapper">
                <img src={Image1} alt="Image1" className="Image1" />
                <img src={Image2} alt="Image2" className="Image2" />
                <img src={Image3} alt="Image3" className="Image3" />
                <img src={Image4} alt="Image4" className="Image4" />
            </div>
        </div>

        <div className="right"></div>
    </div>
  )
}

export default Product