import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import { usePayStore } from "../store/usePayStore";
import "./sass/PayResultPopup.scss";

const PayResultPopup = ({ onClose }) => {
  const { checkedTotalPrice, cartItems, onRemoveChecked } = useCartStore();
  const { today } = usePayStore();
  const addOrder = usePayStore((state) => state.addOrder);
  const navigate = useNavigate();

  // cartItems [0]
  const filteredCart = cartItems.filter((c) => c.checked);
  const itemFirstValue = filteredCart[0] || null;

  // 팝업에 표시되는 아이템명 자르기
  const truncateWords = (text, maxWords) => {
    if (!text) return "";

    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + " ..."
      : text;
  };

  const handlePayFinish = () => {
    onRemoveChecked();
    navigate("/userinfo");
  };

  // 주문내역 저장하기
  const handlePaymentSuccess = () => {
    if (!itemFirstValue) return;

    const orderItem = {
      date: today,
      code: itemFirstValue.code,
      thumbImg: itemFirstValue.thumbImg,
      brand: itemFirstValue.brand,
      title: itemFirstValue.title,
      price: checkedTotalPrice,
    };

    addOrder(orderItem);
  };

  return (
    <div className="pay-result-popup-wrap" onClick={onClose}>
      <div className="pay-result-popup">
        <div className="pay-result-top">
          <h4 className="hide">결제 완료</h4>
          <p>주문이 완료되었습니다.</p>
          <span>Thank you for purchasing our product.</span>
        </div>

        <div className="pay-result-bottom-wrap">
          <div className="pay-result-bottom">
            <div className="pay-result-bottom1-wrap">
              <div className="pay-result-bottom1 code">
                <span>주문번호</span>
                <span>{itemFirstValue?.code}</span>
              </div>

              <div className="pay-result-bottom1 date">
                <span>결제일자</span>
                <span>{today}</span>
              </div>

              <div className="pay-result-bottom1 item">
                <span>주문상품</span>
                <span>{`${truncateWords(itemFirstValue?.title, 3)} 외 ${
                  filteredCart.length - 1
                }건`}</span>
              </div>
            </div>

            <div className="pay-result-bottom2-wrap">
              <div className="pay-result-bottom2 total">
                <span>총 구매 금액</span>
                <span>{(checkedTotalPrice * 0.8).toLocaleString()}</span>
              </div>

              <div className="pay-result-bottom2 reward">
                <span>리워드</span>
                <span>{(checkedTotalPrice * 0.8 * 0.01).toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className="pay-result-btn">
            <Link
              to="/userinfo"
              className="pay-detail"
              onClick={() => {
                handlePaymentSuccess();
                handlePayFinish();
              }}
            >
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
