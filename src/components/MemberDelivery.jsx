import React from "react";
import { usePayStore } from "../store/usePayStore";

const delStatus = ["결제완료", "배송준비", "배송중", "배송완료"];

const MemberDelivery = () => {
  const orders = usePayStore((state) => state.orders);

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
          <p>주문 내역을 확인하고 배송 상태를 확인하세요!</p>
        </div>
        <div className="member-delivery-item-wrap">
          {orders.map((order, id)=> (
            <div className='membet-delivery-item' key={id}>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberDelivery;
