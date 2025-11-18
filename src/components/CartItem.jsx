import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import "./sass/CartItem.scss";

const CartItem = () => {
  const { cartItems, onRemoveCart, totalPrice } = useCartStore();

  // 체크btn active
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='cart-item-list-wrap'>
      <ul className='cart-item-list'>
        {cartItems.map((item, id) => (
          <>
            <li key={id} className='cart-item'>

              <div className='cart-item-inner'>

                <div className='item-left'>
                  <Link className='checkbox' onClick={() => setIsActive}>
                    <img src="../../images/check-icon.svg" alt="선택" className='check' />
                  </Link>
                  <div className='item-img-box'>
                    <img src={item.thumbImg} alt={item.code} />
                  </div>
                  <div className='item-text-box'>
                    <div className='item-desc'>
                      <Link><span className='item-brand'>{item.brand}</span></Link>
                      <span className='item-title'>{item.title}</span>
                      <span className='item-op'>색상 : {item.color}/사이즈 : {item.size}</span>
                    </div>
                    <div className='op-change'>
                      <span>옵션변경</span>
                    </div>
                  </div>
                </div>

                <div className='item-right'>
                  <span>수량 : {item.count}</span>
                  <span>/</span>
                  <span>{(totalPrice * 0.8).toLocaleString()}원</span>
                  <button>바로구매</button>
                </div>

                <span className='del-icon'
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveCart(item.code);
                    alert('장바구니에서 제거되었습니다.')
                  }}>
                  <img src="../../images/close-icon-black.svg" alt="아이템 삭제" />
                </span>

              </div>

            </li>
            <hr></hr>
          </>
        ))}
      </ul>
    </div>
  )
}

export default CartItem