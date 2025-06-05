import React from 'react';
import './ProductDisplay.css'
import star_icon from '../../ASSETS/star_icon.png'
import star_icon_dull from '../../ASSETS/star_dull_icon.png'

const ProducDisplay = (props) => {
    const { product } = props;

    return (
        <div className='productdisplay' >
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-image">
                    <img src={product.image} className='productdisplay-main-img' alt="" />

                </div>

            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon_dull} alt='' />
                    <p> (122) </p>

                </div>
                <div className="productdisplay-right-prices">
                    <div className="product-right-price-old">${product.old_price}</div>
                    <div className="product-right-price-new">${product.new_price}</div>
                </div>
                <div className="prodyctdisplay-right-description">
                    A lightweight , usually knitted , pull over shirt ,close fitted wiz 2 round neckline ad short sleeve worn as an udershirt or outer
                    garment
                </div>
                <div className="productdisplay-right-size">
                    <h1> Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>Add to Cart </button>
                <p className="productdisplay-right-category"><span>Category :</span> Women , T-shirt ,Crop Top</p>
                <p className="productdisplay-right-category"><span>Tags :</span> Modern , Latest </p>

            </div>
        </div>
    )
}

export default ProducDisplay