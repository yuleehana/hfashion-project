import React, { useState } from 'react';
import CartPo from '../components/CartPo';
import './sass/Pay.scss';
import PayItem from '../components/PayItem';
import { paymethodsCard, paymethodsBank, paymethodsPay } from '../data/paymethod';
import { useAuthStore } from '../store/authstore';
import NonCartPo from '../components/NonCartPo';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const payMethods = [
  { id: 1, paymethod: 'card', title: '신용카드' },
  { id: 2, paymethod: 'pay', title: '간편결제' },
  { id: 3, paymethod: 'bank', title: '무통장입금' },
];

const NonPay = () => {
  const { checkedTotalPrice, resetCart } = useCartStore();
  const { nuser, naddress, nonCart } = useAuthStore();
  const navigate = useNavigate();

  const saveNonpay = async () => {
    const ophone = nuser.ophone;
    await setDoc(doc(db, 'nonorders', ophone), {
      user: nuser,
      address: naddress,
      items: nonCart.items,
      totalPrice: nonCart.totalPrice,
      createdAt: new Date(),
    });

    console.log('비회원 장바구니', nonCart);
    navigate('/nonmemberordersheet');
    resetCart();
    alert('비회원 주문이 완료되었습니다.');
  };

  const renderDepth = () => {
    switch (selectedMethod) {
      case 'card':
        return paymethodsCard.map((item) => (
          <div key={item.id} className="pay-method card">
            <div className="card-btn-wrap">
              <button>{item.title}</button>
              {/* <img src="../../images/arrow-down-white.svg" alt="" /> */}
            </div>

            <ul>
              {item.payDepth.map((depth) => (
                <li key={depth.id}>{depth.label}</li>
              ))}
            </ul>
          </div>
        ));

      case 'pay':
        return paymethodsPay.map((item) => (
          <div key={item.id} className="pay-method pay">
            {item.label}
          </div>
        ));

      case 'bank':
        return paymethodsBank.map((item) => (
          <div key={item.id} className="pay-method bank">
            {item.payDepth ? (
              <>
                <button>{item.label}</button>
                <ul>
                  {item.payDepth.map((depth) => (
                    <li>{depth.label}</li>
                  ))}
                </ul>
              </>
            ) : (
              <input type="text" placeholder={item.label} className="bank-input" />
            )}
          </div>
        ));
      default:
        return null;
    }
  };

  const [selectedMethod, setSelectedMethod] = useState('card');

  return (
    <div className="sub-page pay">
      <div className="inner pay">
        <div className="pay-inner-top">
          <h2 className="sub-page-title pay">주문서</h2>
        </div>

        <div className="pay-inner-bottom">
          <div className="pay-inner-left">
            <div className="user-info-wrap">
              <div className="user-info">
                <span>주문자 정보</span>
                <span>{nuser.oemail}</span>
                {/* <input type="text" name="user" placeholder="이름" required /> */}
              </div>
            </div>

            <div className="address-wrap">
              <div className="address-top">
                <span>주문정보</span>
              </div>
              <hr />
              <div className="address-bottom">
                <div className="address-input">
                  <span>주문자</span>
                  <span>{nuser.oname}</span>
                </div>
                <div className="address-input">
                  <span>주문자 전화번호</span>
                  <span>{nuser.ophone}</span>
                </div>
                <div className="address-input delivery">
                  <span>배송지 주소</span>
                  <span>
                    {naddress.naddress} {naddress.naddress2}
                  </span>
                </div>
                <div className="address-input">
                  <span>배송 요청사항</span>
                  <span>{naddress.nrequest}</span>
                </div>
              </div>
            </div>

            <div className="item-wrap">
              <div className="item-top">
                <span>주문상품</span>
                <button>
                  <img src="../../images/arrow-down-white.svg" alt="상품 더 보기" />
                </button>
              </div>
              <hr />
              <div className="item-bottom">
                <PayItem />
              </div>
            </div>

            <div className="coupon-wrap">
              <div className="coupon-top">
                <span>할인정보</span>
              </div>
              <hr />
              <div className="coupon-bottom">
                <div className="coupon">
                  <span>쿠폰 선택</span>
                </div>
                <div className="Hpoint">
                  <span>H.point Pay</span>
                </div>
              </div>
            </div>

            <div className="payment-wrap">
              <div className="payment-top">
                <span>결제수단</span>
              </div>
              <hr />
              <div className="payment-bottom">
                <div className="pay-method-buttons">
                  {payMethods.map((method) => (
                    <button
                      key={method.id}
                      className={selectedMethod === method.paymethod ? 'active' : ''}
                      onClick={() => setSelectedMethod(method.paymethod)}
                    >
                      {method.title}
                    </button>
                  ))}
                </div>

                <div className="pay-method-depth">{renderDepth()}</div>
              </div>
            </div>
          </div>

          <div className="pay-inner-right">
            <NonCartPo sendNonData={saveNonpay} pirce={checkedTotalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonPay;
