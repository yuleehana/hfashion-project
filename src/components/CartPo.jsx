import React from 'react'
import { useCartStore } from '../store/useCartStore'
import "./sass/CartPo.scss"
import { Link } from 'react-router-dom';

const CartPo = () => {

  const { totalPrice, cartItems, onCheckCart } = useCartStore();

  return (
    <div className='cartPo-wrap'>
      <div className='cartPo-inner'>

        <div className='cartPo-inner-top'>
          <p>결제 금액</p>

          <div className='cartPo-pay-list'>
            <div className="cartPo-pay item">
              <span>상품금액</span>
              <span>{(totalPrice).toLocaleString()}</span>
            </div>
            <div className="cartPo-pay dis">
              <span>할인금액</span>
              <span >-{((totalPrice) - (totalPrice * 0.8)).toLocaleString()}</span>
            </div>
            <div className="cartPo-pay del">
              <span>배송비</span>
              <span>무료배송</span>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className='cartPo-inner-bottom'>
          <div className='cartPo-pay-total'>
            <span>총 결제금액</span>
            <span>{(totalPrice * 0.8).toLocaleString()}</span>
          </div>

          <div className='cartPo-btn'>
            <Link to='/pay'
            >{(totalPrice * 0.8).toLocaleString()}원 구매하기 / {onCheckCart}개</Link>
          </div>
          {/* onclick={cartItems.length === 0 ? alert('장바구니에 담긴 상품이 없습니다.') : ''} */}
        </div>

      </div>
    </div>
  )
}

export default CartPo