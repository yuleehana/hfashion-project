import React from 'react'
import "./sass/BuyProductList.scss";

const BuyProductList = () => {

  return (
    <div className="buy-product-wrap">
      <div className='send-product-box'>
        <div className="date-code-box">
          <p className="date">2025.11.03</p>
          <p className="code">POYWI2550551542030</p>
        </div>

        <p className='gap-box'>|</p>

        <div className="brand-name-box">
          <div className="img-box">
            <img src="./images/products/POYWI2550551542030/thumbnail.jpg" alt="" />
          </div>
          <div className="product-item">
            <p className="brand-name">BOSS</p>
            <p className='product-name'>머신 워셔블 플란넬 팬츠 테이퍼드핏</p>
            <button>상세정보</button>
          </div>
        </div>

        <p className='gap-box'>|</p>

        <div className="product-price-box">
          <p className='product-price'>332000</p>
          <p className="unit">원</p>
        </div>
      </div>
    </div>
  )
}

export default BuyProductList