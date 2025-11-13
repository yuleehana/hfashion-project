import React from 'react'

const BuyProductList = () => {
  return (
    <div className='send-product-box'>
      <div className="date-code-box">
        <p className="date">2025.11.03</p>
        <p className="code"></p>
      </div>

      <div className="brand-name-box">
        <div className="img-box">
          <img src="" alt="" />
        </div>
        <div className="product-item">
          <p className="brand-name"></p>
          <p className='product-name'></p>
          <button>상세정보</button>
        </div>

        <div className="product-price-box">
          <p className='product-price'></p>
          <span className="unit">원</span>
        </div>
      </div>
    </div>
  )
}

export default BuyProductList