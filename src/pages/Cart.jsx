import React from 'react'
import CartPo from '../components/CartPo';
import CartItem from '../components/CartItem';
import "./sass/Cart.scss";
import { useCartStore } from '../store/useCartStore';
import CartNone from '../components/CartNone';

const Cart = () => {

  const { cartItems } = useCartStore();

  return (
    <div className='sub-page cart'>
      <div className='inner cart'>

        <div className='cart-inner-top'>
          <h2 className='sub-page-title cart'>장바구니</h2>
        </div>

        <div className='cart-inner-bottom'>
          <div className='cart-inner-left'>
            {cartItems.length === 0 ? <CartNone /> : <CartItem />}
            {/* <CartItem /> */}
          </div>
          <div className='cart-inner-right'>
            <CartPo />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart