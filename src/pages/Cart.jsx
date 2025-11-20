import React, { useState } from 'react'
import CartPo from '../components/CartPo';
import CartItem from '../components/CartItem';
import "./sass/Cart.scss";
import { useCartStore } from '../store/useCartStore';
import CartNone from '../components/CartNone';
import CartOpChangePopup from '../components/CartOpChangePopup';
// import { useProductStore } from '../store/useProductStore';

const Cart = () => {
  const { cartItems } = useCartStore();

  // op-change 팝업 열기
  const [showPopup, setShowPopup] = useState(false);

  // 카트 상품 저장 변수
  const [product, setProduct] = useState(cartItems);
  


  return (
    <div className='sub-page'>
      <div className='inner cart'>

        <div className='cart-inner-top'>
          <div className='cart-inner-title'>
            <h2 className='sub-page-title cart'>장바구니</h2>
          </div>

          <div className='cart-inner-content'>
            <div className='cart-inner-left'>
              {cartItems.length === 0 ? <CartNone /> : <CartItem product={product} onOpenPopup={() => setShowPopup(true)}/>}
            </div>
            <div className='cart-inner-right'>
              <CartPo />
            </div>
          </div>
        </div>

        <div className='cart-inner-bottom'>
          <div className='other-item-wrap'>

          </div>
        </div>

        {showPopup && <CartOpChangePopup onClose={() => setShowPopup(false)} />}

      </div>
    </div>
  )
}

export default Cart