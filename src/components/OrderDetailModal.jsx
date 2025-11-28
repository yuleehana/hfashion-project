import React from 'react';
import './sass/OrderDetailModal.scss';

const OrderDetailModal = ({ order, onClose }) => {
  // order 데이터가 없거나 모달이 닫혀야 할 경우 null 반환
  console.log('제품데이터정보', order);
  if (!order) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* 모달 내용 컨테이너 (이 영역 클릭 시 모달이 닫히지 않도록 이벤트 전파 중단) */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>주문 상세 내역 (주문번호: {order.code})</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="modal-body">
          <div className="date-totalPrice">
            <p>총 결제 금액 : {order.price.toLocaleString()}원</p>
            <p>날짜 : {order.date}</p>
          </div>
          <ul className="product-list">
            {order.products.map((product, index) => (
              <li key={index} className="product-item">
                <div className="product-details">
                  <img src={product.thumbImg} alt={product.title} />
                  <span className="product-title">{product.title} /</span>
                </div>
                <div className="product-price-wrap">
                  <span className="product-price">
                    {(product.itemPrice * 0.8).toLocaleString()}
                  </span>
                  <span>원</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="btn primary small">
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailModal;
