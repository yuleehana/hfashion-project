import React, { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import './sass/CartPo.scss';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authstore';
import Paybutton from './Paybutton';

const NonCartPo = ({ sendNonData, to, price }) => {
  const { totalPrice, checkedTotalPrice, cartItems, checkedList } = useCartStore();

  const { onNMember, onNAddress } = useAuthStore();

  const [totalCheck, setTotalCheck] = useState(true);

  console.log('전체카트아이템 항목', cartItems);
  console.log('체크된항목', checkedTotalPrice);

  const { user } = useAuthStore();

  // 선택된 상품 개수
  const checkedCount = cartItems.filter((item) => item.checked).length;

  return (
    <div className="cartPo-wrap">
      <div className="cartPo-inner">
        <div className="cartPo-inner-top">
          <p>결제 금액</p>

          <div className="cartPo-pay-list">
            <div className="cartPo-pay item">
              <span>상품금액</span>
              <span>{checkedTotalPrice.toLocaleString()}</span>
            </div>
            <div className="cartPo-pay dis">
              <span>할인금액</span>
              <span>-{(checkedTotalPrice * 0.2).toLocaleString()}</span>
            </div>
            <div className="cartPo-pay del">
              <span>배송비</span>
              <span>무료배송</span>
            </div>
          </div>
        </div>

        <hr />

        <div className="cartPo-inner-bottom">
          <div className="cartPo-pay-total">
            <span>총 결제금액</span>
            {(checkedTotalPrice * 0.8).toLocaleString()}
          </div>

          <div className="cartPo-btn">
            <Paybutton onClick={sendNonData} to={to} price={checkedTotalPrice * 0.8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonCartPo;
