import React from 'react'
import { useCartStore } from '../store/useCartStore'

const CartPo = () => {

  const { totalPrice, cartItems } = useCartStore();

  return (
    <div className='cartPo-wrap'>
      <div className='cartPo-inner'>
        <p>결제 금액</p>

        <div className='cartPo-pay-list'>
          <div className="cartPo-pay item">
            <span>상품금액</span>
            <span>{(totalPrice).toLocaleString()}</span>
          </div>
          <div className="cartPo-pay dis">
            <span>할인금액</span>
            <span>{((totalPrice) - (totalPrice * 0.8)).toLocaleString()}</span>
          </div>
          <div className="cartPo-pay del">
            <span>배송비</span>
            <span>무료배송</span>
          </div>
        </div>

        <div className='cartPo-pay-total'>
          <span>총 결제금액</span>
          <span>{(totalPrice * 0.8).toLocaleString()}</span>
        </div>

        <div className='cartPo-btn-wrap'>
          <button>{(totalPrice * 0.8).toLocaleString()}원 구매하기 {cartItems.length}개</button>
        </div>

      </div>
    </div>
  )
}

export default CartPo