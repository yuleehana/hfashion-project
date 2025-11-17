import React, { useState } from 'react'
import './sass/ProductCard.scss'

const ProductCard = ({ sendItem }) => {

  const [isActive, setIsActive] = useState(false);
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive(!isActive);
  };

  const price = sendItem?.price ?? 0;

  return (
    <>
      <div className="img-box">
        <img src={sendItem.thumbImg} alt={sendItem.title} />
        <span
          className={`favorite ${isActive ? 'active' : ''}`}
          onClick={handleFavoriteClick}>
        </span>
      </div>
      <div className="text-box">
        <p className='brand'>{sendItem.brand}</p>
        <p className='title'><strong>{sendItem.title}</strong></p>
        <p className='price'>
          <span>
            <span className='sale-price'>₩{(price * 0.8).toLocaleString()}</span>
            <del>{(price).toLocaleString()}</del>
          </span>
          <span className='sale'>20%</span>
        </p>
      </div>
    </>
  )
}

export default ProductCard