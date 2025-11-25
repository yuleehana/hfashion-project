import React from "react";
import "./sass/BuyProductList.scss";
import { usePayStore } from "../store/usePayStore";

const BuyProductList = () => {
const {orders} = usePayStore();
  // 팝업에 표시되는 아이템명 자르기
  const truncateWords = (text, maxWords) => {
    if (!text) return "";

    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + " ..."
      : text;
  };

  // 주문 내역이 없으면 없다고
  if (orders.length === 0) return null;

  // 있으면 있다고 표시
  return (
    <div className="buy-product-wrap">
      {orders.map((order, id) => (
        <div className="send-product-box" key={id}>
          <div className="date-code-box">
            <p className="date">{order.date}</p>
            <p className="code">{order.code}</p>
          </div>

          <p className="gap-box">|</p>

          <div className="brand-name-box">
            <div className="img-box">
              <img src={order.thumbImg} alt="" />
            </div>
            <div className="product-item">
              <p className="brand-name">{order.brand}</p>
              <p className="product-name">
                {truncateWords(order.title, 5)}
                {orders.length > 1 ? `외 ${orders.length - 1}건` : ""}
              </p>

              <button>상세정보</button>
            </div>
          </div>

          <p className="gap-box">|</p>

          <div className="product-price-box">
            <p className="product-price">
              {(order.price * 0.8).toLocaleString()}
            </p>
            <p className="unit">원</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuyProductList;
