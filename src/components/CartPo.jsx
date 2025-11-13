import React from 'react'

const CartPo = () => {
  


  return (
    <div className='cartPo-wrap'>
      <div className='cartPo-inner'>
        <p>결제 금액</p>
        <div className='cartPo-pay-list'>
          <div className="cartPo-pay item">
            <span>상품금액</span>
            <span></span>
          </div>
          <div className="cartPo-pay dis">
            <span>할인금액</span>
            <span></span>
          </div>
          <div className="cartPo-pay del">
            <span>배송비</span>
            <span></span>
          </div>
        </div>
        <div className='cartPo-pay-total'>
          <span>총 결제금액</span>
          <span></span>
        </div>
        <div className='cartPo-btn-wrap'>
          <button>원 구매하기 개</button>
        </div>        
      </div>
    </div>
  )
}

export default CartPo