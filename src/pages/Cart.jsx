import React from 'react'
import CartPo from '../components/CartPo';
import CartItem from '../components/CartItem';
// import { useCartStore } from '../store/useCartStore';


// const { cartItems, cartCount, totalPrice, onRemoveCart } = useCartStore();

const Cart = () => {

  return (
    <div className='sub-page'>
      <div className='inner'>
        <h2 className='sub-page-title'>장바구니</h2>
        <div className='cart-inner-left'>
          {/* {cartItems.map((items) => (
            <CartItem
              item={items}
              key={items.code}
              brand={items.brand}
              title={items.title}
              img={items.thumbImg}
            />

          ))} */}
          <CartItem/>
        </div>
        <div className='cart-inner-right'>
          <CartPo />
        </div>
      </div>
    </div>
  )
}

export default Cart