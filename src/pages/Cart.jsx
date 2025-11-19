import React, { useState } from 'react'
import CartPo from '../components/CartPo';
import CartItem from '../components/CartItem';
import "./sass/Cart.scss";
import { useCartStore } from '../store/useCartStore';
import CartNone from '../components/CartNone';
import DetailSimilarSwiper from '../components/DetailSimilarSwiper';

const Cart = () => {
  const { cartItems } = useCartStore();
  const {onItemsCategory} = useCartStore();

  const [product, setProduct] = useState(null);

  return (
    <div className='sub-page cart'>
      <div className='inner cart'>

        <div className='cart-inner-top'>
          <div className='cart-inner-title'>
            <h2 className='sub-page-title cart'>장바구니</h2>
          </div>

          <div className='cart-inner-content'>
            <div className='cart-inner-left'>
              {cartItems.length === 0 ? <CartNone /> : <CartItem />}
            </div>
            <div className='cart-inner-right'>
              <CartPo />
            </div>
          </div>
        </div>

        <div className='cart-inner-bottom'>
          <div className='other-item-wrap'>
            <DetailSimilarSwiper product={product}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart