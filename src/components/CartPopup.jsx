import React from 'react'
import { Link } from 'react-router-dom'
import "./sass/CartPopup.scss";

const CartPopup = ({ onClose }) => {
  return (
    <div className='cart-popup-wrap' onClick={onClose}>
      <div className='cart-popup' onClick={(e) => e.stopPropagation()}>
        <div className='cart-popup-top'>
          <h2>장바구니 담기 완료</h2>
          <span>
            <img src='../../images/close-icon-black.svg' alt="popup-close-icon" />
          </span>
        </div>

        <div className='cart-popup-middle'>
          <span>해당 상품이 장바구니에 담겼습니다.</span>
          <span>장바구니로 이동하시겠습니까?</span>
        </div>

        <div className='cart-popup-bottom'>
          <button onClick={onclose}>계속 쇼핑하기</button>
          <Link to='/cart'><button>장바구니 보기</button></Link>
        </div>
      </div>
    </div>
  )
}

export default CartPopup