import React, { useState } from "react";
import CartPo from "../components/CartPo";
import "./sass/Pay.scss";
import PayItem from "../components/PayItem";
import {
  paymethodsCard,
  paymethodsBank,
  paymethodsPay,
} from "../data/paymethod";

const payMethods = [
  { id: 1, paymethod: "card", title: "신용카드" },
  { id: 2, paymethod: "pay", title: "간편결제" },
  { id: 3, paymethod: "bank", title: "무통장입금" },
];

const Pay = () => {
  const renderDepth = () => {
    switch (selectedMethod) {
      case "card":
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

      case "pay":
        return paymethodsPay.map((item) => (
          <div key={item.id} className="pay-method pay">
            {item.label}
          </div>
        ));

      case "bank":
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
              <input
                type="text"
                placeholder={item.label}
                className="bank-input"
              />
            )}
          </div>
        ));
      default:
        return null;
    }
  };

  const [selectedMethod, setSelectedMethod] = useState("card");

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
                <input type="text" name="user" placeholder="이름" required />
              </div>
            </div>

            <div className="address-wrap">
              <div className="address-top">
                <span>배송지</span>
                <div className="address-btn">
                  <button className="btn xsmall grey">주문자와 동일</button>
                  <button className="btn xsmall grey">배송지 선택</button>
                </div>
              </div>
              <hr />
              <div className="address-bottom">
                <div className="address-input">
                  <span>수신자명 (필수)</span>
                  <input
                    type="text"
                    name="displayName"
                    placeholder="상품을 받으실 분의 이름을 입력해주세요."
                  />
                </div>
                <div className="address-input">
                  <span>휴대폰번호(필수)</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="휴대폰 번호를 입력해주세요."
                    required
                  />
                </div>
                <div className="address-input delivery">
                  <span>
                    <span>배송지 주소</span>
                    <button className="btn xsmall primary">주소검색</button>
                  </span>
                  <div>
                    <input
                      type="text"
                      name="address"
                      placeholder="상품을 받으실 분의 주소를 입력해주세요."
                      required
                    />
                    <input
                      type="text"
                      name="address2"
                      placeholder="상세주소를 입력해주세요"
                      required
                    />
                  </div>
                </div>
                <div className="address-input">
                  <span>배송 요청사항</span>
                  <input
                    type="text"
                    name="request"
                    placeholder="배송기사에게 전달되는 메시지입니다. 선택해주세요"
                  />
                </div>
              </div>
            </div>

            <div className="item-wrap">
              <div className="item-top">
                <span>주문상품</span>
                <button>
                  <img
                    src="../../images/arrow-down-white.svg"
                    alt="상품 더 보기"
                  />
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
                      className={
                        selectedMethod === method.paymethod ? "active" : ""
                      }
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
            <CartPo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
