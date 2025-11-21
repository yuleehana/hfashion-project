import React, { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import './sass/CartOpChangePopup.scss';

// const sizes = ['XS', 'S', 'M', 'L', 'XL'];
// const colors = ['pink', 'sky', 'white', 'black'];

const CartOpChangePopup = ({ onClose, item }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors = ['pink', 'sky', 'white', 'black'];

  // 선택한 사이즈 체크
  const [selectSize, setSelectSize] = useState(item.size);
  // 선택 색상 체크
  const [selectColor, setSelectColor] = useState(item.color);
  // 수량 체크 변수
  const [count, setCount] = useState(item.count);

  //상태변수 ------------------------------------------

  //카트아이템 저장된변수
  const { cartItems, totalPrice, updateCartOptions } = useCartStore();

  //메서드 ---------------------------------------------
  // 사이즈 누르면 caritems에 값을 바꾸고,
  const handleItemSize = (size) => {
    setSelectSize(size);
    console.log(cartItems);
    console.log(size);
  };

  const handleUpdate = () => {
    updateCartOptions(item.code, selectSize, selectColor, count);
    onClose();
  };

  return (
    <div className="cart-op-change-wrap">
      <div className="cart-op-popup" onClick={(e) => e.preventDefault()}>
        <div className="op-popup-title">
          <h4>옵션변경</h4>
        </div>

        <div className="op-popup-middle">
          <div className="op-popup-item">
            <div className="op-text-box">
              <span className="op-brand"></span>
              <span className="op-title"></span>
            </div>
          </div>

          <div className="op-popup-change">
            <div className="op-size-change">
              <p>사이즈 선택 </p>
              <ul>
                {sizes.map((size, id) => (
                  <li key={id}>
                    <button
                      className={selectSize === size ? 'active' : ''}
                      onClick={() => handleItemSize(size)}
                    >
                      {size}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="op-color-change">
              {colors.map((color, id) => (
                <button
                  key={id}
                  className={`${color} ${selectColor === color ? 'active' : ''}`}
                  onClick={() => setSelectColor(color)}
                ></button>
              ))}
            </div>

            <p className="op-count-change">
              <button
                className="minus"
                onClick={() => setCount((c) => Math.max(1, c - 1))}
              ></button>
              <span>{count}</span>
              <button className="plus" onClick={() => setCount((c) => c + 1)}></button>
            </p>
          </div>
          <div>가격 : {(item.price * 0.8 * count).toLocaleString()}원 </div>
        </div>

        <div className="op-popup-button" style={{ display: 'flex', gap: '20px' }}>
          <button type="button" onClick={onClose}>
            취소
          </button>
          <button type="button" onClick={handleUpdate}>
            변경
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartOpChangePopup;
