import React from 'react';
import { usePayStore } from '../store/usePayStore';
import { Link } from 'react-router-dom';
import './sass/MemberDelivery.scss';

const delStatus = ['결제완료', '배송준비', '배송중', '배송완료'];

const MemberDelivery = () => {
  const { orders, receiverInfo } = usePayStore();

  const truncateWords = (text, maxWords) => {
    if (!text) return '';

    const words = text.split(' ');
    return words.length > maxWords ? words.slice(0, maxWords).join(' ') + ' ...' : text;
  };

  return (
    <div className="sub-page">
      <div className="member-delivery-wrap">
        <div className="member-delivery-inner-top">
          <h2 className="sub-page-title">주문 / 배송조회</h2>
          <div className="member-delivery-status">
            <div className="member-delivery-box-wrap">
              <ul className="member-delivery-box-list">
                {delStatus.map((s, id) => (
                  <li key={id} className="member-delivery-box">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <span>주문 내역과 배송 상태를 확인하세요!</span>
          </div>
        </div>
        {orders.length === 0 ? (
          <div className="member-delivery-none">
            <span>주문하신 상품이 없습니다</span>
            <Link to="/">더 많은 상품 구경하러 가기</Link>
          </div>
        ) : (
          <>
            <div className="member-delivery-item-wrap">
              <ul className="member-del-item-list">
                {orders.map((order, id) => {
                  const firstProduct = order.products[0];

                  return (
                    <li className="member-del-item" key={id}>
                      <div className="member-del-item-inner">
                        <div className="del-item-inner-top">
                          <div className="del-inner-top-left">
                            <span>{order.date}</span>
                            <span>{firstProduct.code}</span>
                          </div>
                          <div className="del-inner-top-right">
                            <button>주문 상세</button>
                          </div>
                        </div>
                        <div className="del-item-inner-bottom">
                          <div className="del-inner-bottom-img-box">
                            <img src={firstProduct.thumbImg} alt="" />
                          </div>
                          <div className="del-inner-bottom-text-box">
                            <div className="del-item-info">
                              <span className="item-title">
                                {truncateWords(firstProduct.title, 5)}
                                {order.products.length > 1
                                  ? ` 외 ${order.products.length - 1}건`
                                  : ''}
                              </span>
                            </div>
                            <div className="del-item-price">
                              <span className="item-price">
                                {(order.price * 0.8).toLocaleString()}
                              </span>
                              <span>원</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MemberDelivery;
