import React from "react";
import { usePayStore } from "../store/usePayStore";
import { Link } from "react-router-dom";

const delStatus = ["결제완료", "배송준비", "배송중", "배송완료"];

const MemberDelivery = () => {
  const { orders, receiverInfo } = usePayStore();

  const truncateWords = (text, maxWords) => {
    if (!text) return "";

    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + " ..."
      : text;
  };

  return (
    <div className="sub-page">
      <div className="inner member-delivery-wrap">
        <div className="member-delivery-inner-top">
          <h2 className="sub-page-title">주문 / 배송조회</h2>
        </div>
        {orders.length === 0 ? (
          <>
            <p>주문하신 상품이 없습니다</p>
            <Link to="/">더 많은 상품 구경하러 가기</Link>
          </>
        ) : (
          <>
            <div className="member-delivery-inner-bottom">
              <div className="member-delivery-box-wrap">
                <ul>
                  {delStatus.map((s, id) => (
                    <li key={id} className="member-delivery-box">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <p>주문 내역과 배송 상태를 확인하세요!</p>
            </div>
            <div div className="member-delivery-item-wrap">
              <ul className="member-del-item-list">
                {orders.map((order, id) => (
                  <li key={id} className="member-del-item">
                    <div className="member-del-item-inner">
                      <div className="member-del-inner-top">
                        <div className="del-inner-top-left">
                          <span>{order.date}</span>
                          <span>주문번호 : {order.code}</span>
                        </div>
                        <div className="del-inner-top-right">
                          <button>주문 상세</button>
                        </div>
                      </div>

                      <div className="member-del-inner-bottom">
                        <div className="item-left">
                          <div className="item-img-box">
                            <img src={order.thumbImg} alt={order.title} />
                          </div>
                          <div className="item-text-box">
                            <div className="item-desc">
                              <span className="item-title">
                                {truncateWords(order.title, 5)}
                                {orders.length === 1
                                  ? ""
                                  : `외 ${orders.length - 1}건`}
                              </span>
                              <span className="item-op">
                                <span>색상 : {order.color}</span>
                                <span>사이즈 : {order.size}</span>
                                <span>수량 : {order.count}</span>
                              </span>
                            </div>
                            <div className="item-price">
                              <span>{(order.price * 0.8).toLocaleString()}</span>
                              <span>원</span>
                            </div>
                          </div>
                        </div>
                        <div className="item-right"></div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MemberDelivery;
