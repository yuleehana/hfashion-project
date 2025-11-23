import React from "react";
import { Link } from "react-router-dom";

const PayResultPopup = () => {
  return (
    <div className="pay-result-popup-wrap">
      <div className="pay-result-popup">
        <div className="pay-result-top">
          <h4 className="hide">결제 완료</h4>
          <p>주문이 완료되었습니다.</p>
        </div>

        <div className="pay-result-bottom">
          
        </div>
        <div className="pay-result-btn">
          <Link to='/userinfo'>
            <button>주문 상세 내역 보기</button>
          </Link>
          <Link to='/'>
            <button>메인 화면 가기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PayResultPopup;
