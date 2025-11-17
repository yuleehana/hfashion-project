import React from 'react'
import { useProductStore } from '../store/useProductStore'
import CartPo from '../components/CartPo';

const Cart = () => {
  

  return (
    <div className='sub-page'>
      <div className='inner'>
        <h2 className='sub-page-title'>장바구니</h2>
        <div className='cart-inner-left'>

        </div>

        <div className='cart-inner-right'>
          <CartPo />
        </div>
      </div>
    </div>
  )
}

export default Cart