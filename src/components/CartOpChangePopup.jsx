import React from 'react'
import { useCartStore } from '../store/useCartStore'
import "./sass/CartOpChangePopup.scss";

const CartOpChangePopup = ({ onClose }) => {
  const { cartItems, onPlusCount, onMinusCount } = useCartStore();


  return (
    <div className='cart-op-change-wrap' onClick={onClose}>
      <div className='cart-op-popup' onClick={(e) => e.preventDefault()}>
        <div className='op-popup-title'>
          <h4>옵션변경</h4>
        </div>

        <div className='op-popup-middle'>
          <div className='op-popup-item'>
            <div className='op-img-box'>
              {/* <img src="" alt="" /> */}
            </div>
            <div className='op-text-box'>
              <span className='op-brand'></span>
              <span className='op-title'></span>

            </div>
          </div>

          <div className='op-popup-change'>
            <div className='op-size-change'>

            </div>

            <div className='op-count-change'>
              <button>-</button>
              <span></span>
              <button>+</button>
            </div>
          </div>
        </div>


        <div className='op-popup-button'>
          <button onClick={onClose}>취소</button>
          <button>변경</button>
        </div>
      </div>
    </div>
  )
}

export default CartOpChangePopup