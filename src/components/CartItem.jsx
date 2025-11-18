import React from 'react'
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import "./sass/CartItem.scss";

const CartItem = () => {

  const { cartItems, onRemoveCart } = useCartStore();

  return (
    <div className='cart-item-list-wrap'>
      <ul className='cart-item-list'>
        {cartItems.map((item, id) => (
          <li key={id} className='cart-item'>

            <div className='cart-item-inner'>

              <div className='item-left'>
                <span className='checkbox'><img src="/" alt=" " /></span>
                <div className='item-img-box'>
                  <img src={item.thumbImg} alt={item.code} />
                </div>
                <div className='item-text-box'>
                  <div className='item-desc'>
                    <Link><span className='item-brand'>{item.brand}</span></Link>
                    <span className='item-title'>{item.title}</span>
                    <span className='item-op'>{item.color}/{item.size}</span>
                  </div>
                  <div className='op-change'>
                    <span>옵션변경</span>
                  </div>
                </div>
              </div>

              <div className='item-right'>
                <span>수량</span>
                <span>원</span>
                <button>바로구매</button>
              </div>

              <span className='del-icon' onClick={() => onRemoveCart(item.code, item.size)}>
                <img src="../public/images/close-icon-black.svg" alt="아이템 삭제" />
              </span>

            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default CartItem