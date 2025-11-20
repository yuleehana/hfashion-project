import React from 'react'
import "./sass/ProductQNA.scss";

const ProductQNA = () => {
  return (
    <>
      <div className="qna-header">
        <h3>상품 Q&A</h3>
        <p className='header-text'>
          상품에 대한 배송, 교환, 취소등의 자세한 문의 사항은 고객센터  1:1문의를 이용하여 주시기 바랍니다.
        </p>
      </div>
      <div className='qna-list-wrap'>
        <div className="qna-list-box">
          <div className="qna-list">
            <div className="number-list">1</div>
            <div className="list-item">
              <div className="top-item">
                <p className="user-id">ezen*****</p>
                <p className="split">|</p>
                <p className="upload-date">2025.10.01</p>
                <p className="split">|</p>
                <p className="answer-text">답변대기</p>
              </div>
              <div className="item-qna-title">
                <p className="qna-title">상품 관련 문의입니다.</p>
                <img src="/images/icon-lock.svg" alt="lock" />
              </div>
            </div>
            <button className="qna-list-door">
              <img src="/images/arrow-down-icon.svg" alt="door" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductQNA