import React from "react";
import "./sass/PayMethod.scss";

const methods1Depth1 = [
  { key: "card1", label: "삼성카드" },
  { key: "card2", label: "현대카드" },
  { key: "card3", label: "롯데카드" },
  { key: "card4", label: "신한카드" },
];
const methods1Depth2 = [
  { key: "c1", label: "일시불" },
  { key: "c2", label: "2개월" },
  { key: "c3", label: "3개월 (무이자)" },
  { key: "c4", label: "4개월" },
];

const methods2 = ["카카오페이", "토스페이", "네이버페이"];

const methods3 = ["입금은행 선택", "입금자명"];
// 국민은행, 신한은행, 하나은행, 기업은행, 농협은행

const PayMethod = ({onOpen}) => {
  return (
    <ul className="pay-method-wrap">
      <li className="pay-method">
        <button className="method1">
          <span>카드선택</span>
          <img src="../../images/arrow-down-white.svg" alt="더보기" />
        </button>

        <ul className="methodDepth1">
          {methods1Depth1.map((card) => (
            <li key={card.key}>
              <button>{card.label}</button>
            </li>
          ))}
        </ul>
      </li>
      <li className="pay-method">
        <div className="method1">
          <button>할부선택</button>
          <img src="../../images/arrow-down-white.svg" alt="더보기" />
        </div>

        <ul className="methodDepth1">
          {methods1Depth2.map((c) => (
            <li key={c.key}>
              <button>{c.label}</button>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default PayMethod;
