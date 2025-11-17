import React from 'react'
import { useCartStore } from '../store/useCartStore'

const { cartItem, onRemoveCart, onAddToCart, totalPrice } = useCartStore();

const CartItem = () => {
  return (
    <div className='cart-item-list-wrap'>
      <ul className='cart-item'>

      </ul>
    </div>
  )
}

export default CartItem