import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import { usePayStore } from "../store/usePayStore";
import "./sass/PayResultPopup.scss";

const PayResultPopup = ({ onClose }) => {
  const { checkedTotalPrice, cartItems } = useCartStore();
  const { today } = usePayStore();

  // cartItems [0]
  const filteredCart = cartItems.filter((c) => c.checked);
  const itemFirstValue = filteredCart[0];

  return (
    <div className="pay-result-popup-wrap" onClick={onClose}>
      <div className="pay-result-popup">
        <div className="pay-result-top">
          <h4 className="hide">결제 완료</h4>
          <p>주문이 완료되었습니다.</p>
        </div>

        <div className="pay-result-bottom-wrap">
          <div className="pay-result-bottom">
            <div className="pay-result-bottom1">
              <div className="pay-result-bottom1 code">
                <span>주문번호</span>
                <span>{itemFirstValue.code}</span>
              </div>

              <div className="pay-result-bottom1 date">
                <span>결제일자</span>
                <span>{today}</span>
              </div>

              <div className="pay-result-bottom1 item">
                <span>주문상품</span>
                <span>{`${itemFirstValue.title} 외 ${
                  filteredCart.length - 1
                }건`}</span>
              </div>
            </div>

            <div className="pay-result-bottom2">
              <div className="pay-result-bottom2 total">
                <span>총 구매 금액</span>
                <span>{(checkedTotalPrice * 0.8).toLocaleString()}</span>
              </div>

              <div className="pat=y-result-bottom2 reward">
                <span>reward</span>
                <span>reward</span>
              </div>
            </div>
          </div>
          <div className="pay-result-btn">
            <Link to="/userinfo" className="pay-detail">
              <button>주문 상세 내역 보기</button>
            </Link>
            <Link to="/" className="to-main">
              <button>메인 화면 가기</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayResultPopup;
