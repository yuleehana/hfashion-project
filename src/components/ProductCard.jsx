import React from 'react'
import './sass/ProductCard.scss'

const ProductCard = ({ sendItem }) => {
  return (
    <>
      <div className="img-box">
        <img src={sendItem.thumbImg} alt={sendItem.title} />
      </div>
      <div className="text-box">
        <p className='brand'>{sendItem.brand}</p>
        <p className='title'><strong>{sendItem.title}</strong></p>
        <p className='price'>
          <span>
            <span className='sale-price'>{sendItem.price * 0.8}</span>
            <del>{sendItem.price}</del>
          </span>
          <span className='sale'>20%</span>
        </p>
      </div>
    </>
  )
}

export default ProductCard