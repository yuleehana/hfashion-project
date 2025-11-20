import React, { useState } from 'react'
import { useCartStore } from '../store/useCartStore';
import "./sass/CartItem.scss";
import { Link, useParams } from 'react-router-dom';

const CartItem = ({ product, onOpenPopup }) => {
  const { code } = useParams();

  const { cartItems, onRemoveCart, onCheckCart } = useCartStore();


  // 체크btn active
  const [isActive, setIsActive] = useState(false);

  const handleToggle = (code) => {
    // setIsActive(!isActive)
    setIsActive(isActive)
    onCheckCart(code)
  }

  return (
    <div className='cart-item-list-wrap'>
      <ul className='cart-item-list'>
        {cartItems.map((item, id) => (
          <>
            <li key={id} className='cart-item'>

              <div className='cart-item-inner'>

                <div className='item-left'>
                  <button onClick={() => handleToggle(item.code)}
                    className={`checkbox ${isActive ? "active" : ""}`}>
                  </button>
                  <div className='item-img-box'>
                    <img src={item.thumbImg} alt={item.code} />
                  </div>
                  <div className='item-text-box'>
                    <div className='item-desc'>
                      <span className='item-brand'>{item.brand}</span>
                      <span className='item-title'>{item.title}</span>
                      <span className='item-op'>색상 : {item.color}/사이즈 : {item.size}</span>
                    </div>
                    <div className='op-change'>
                      <button onClick={onOpenPopup}>옵션변경</button>
                    </div>
                  </div>
                </div>

                <div className='item-right'>
                  <span>수량 : {item.count}</span>
                  <span>/</span>
                  <span>{(item.price * 0.8).toLocaleString()}원</span>
                  <Link to='/pay'>바로구매</Link>
                </div>

                <span className='del-icon'
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveCart(item.code, item.size, item.color);
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