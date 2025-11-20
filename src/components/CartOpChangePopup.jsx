import React from 'react'
import { useCartStore } from '../store/useCartStore'

const CartOpChangePopup = ({onClose}) => {
  const { cartItems } = useCartStore();


  return (
    <div className='cart-op-change-wrap'>
      <div className='cart-op-popup'>
        <div className='op-popup-title'>
          <h2>옵션변경</h2>
        </div>

        <div className='op-popup-middle'>
          <div className='op-popup-item'>
            <div className='op-img-box'>
              <img src="" alt="" />
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