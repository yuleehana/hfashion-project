import React, { useEffect, useState } from 'react';
import './sass/NonMemberPopUp.scss';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const STATUS = ['결제완료', '배송준비', '배송중', '배송완료'];

const NonMemberPopUp = ({ data, onClose }) => {
  console.log(data);

  //data갖어온값에 status0으로설정
  const [items, setItems] = useState(data.items.map((item) => ({ ...item, status: 0 })));

  // 상태 카운트 계산
  const statusCounts = items.reduce(
    (acc, item) => {
      acc[item.status]++;
      return acc;
    },
    [0, 0, 0, 0]
  );

  // 5초마다 상태 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) =>
        prev.map((item) => (item.status < 3 ? { ...item, status: item.status + 1 } : item))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="non-popup-wrap">
      <div className="non-popup-inner">
        <div className="non-popup-title">
          <h2>비회원 주문 / 배송조회</h2>
          <p>주문 내역을 확인하고 배송상태를 확인하세요!</p>
          <p onClick={onClose}>x</p>
        </div>
        <div className="non-popup-delivery">
          <div className="delivery delivery1">
            <span className="delivery-box delivery1-box"></span>
            <span>{statusCounts[0]}</span>
            <span>결제완료</span>
          </div>
          <div className="delivery delivery2">
            <span className="delivery-box delivery2-box"></span>
            <span>{statusCounts[1]}</span>
            <span>배송준비</span>
          </div>
          <div className="delivery delivery3">
            <span className="delivery-box delivery3-box"></span>
            <span>{statusCounts[2]}</span>
            <span>배송중</span>
          </div>
          <div className="delivery delivery4">
            <span className="delivery-box delivery4-box"></span>
            <span>{statusCounts[3]}</span>
            <span>배송완료</span>
          </div>
        </div>
        <div className="non-popup-item-wrap">
          {items.map((d) => (
            <div className="non-popup-item">
              <div className="non-popup-item-t">
                <span>주문번호 : {d.code}</span>
                <span>{STATUS[d.status]}</span>
              </div>
              <div className="non-popup-item-b">
                <div className="non-popup-item-b-r">
                  <img src={d.thumbImg} alt={d.title} />
                </div>
                <div className="non-popup-item-b-l">
                  <span>{d.title}</span>
                  <span>
                    색상 : {d.color} | 수량 : {d.count}
                  </span>
                  <span>{(d.price * 0.8).toLocaleString()}원</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NonMemberPopUp;
