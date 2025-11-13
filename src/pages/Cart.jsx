import React from 'react'
import { useProductStore } from '../store/useProductStore'

const Cart = () => {
  const { cartItems, cartCount, totalPrice, onAddToCart } = useProductStore();

  return (
    <div>Cart</div>
  )
}

export default Cart