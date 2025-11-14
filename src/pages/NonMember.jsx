import React, { useState } from 'react';
import './sass/NonMember.scss';
import OrderForm from '../components/OrderForm';

const NonMember = () => {
  //사이즈중복방지를위한 변수
  const [userSize, setUsersize] = useState('');

  //

  return (
    <div className="sub-page">
      <div className="nonmember-inner">
        <h2 className="sub-page-title">비회원 주문결제</h2>
        <div className="nonmember-wrap">
          <div className="sub-inner-left">
            <div className="sub-inner-left-top">
              <div className="sub-order-inf">
                <p>주문자 정보</p>
                <form>
                  <label>
                    <span>주문자</span>
                    <input type="text" name="name" placeholder="이름을 입력해주세요." />
                  </label>

                  <label>
                    <span>연락처</span>
                    <input type="tel" name="phone" placeholder="전화번호를 입력해주세요." />
                  </label>

                  <label>
                    <span>이메일</span>
                    <input type="email" name="email" placeholder="이메일을 입력해주세요." />
                  </label>

                  <label>
                    <span>주문비밀번호</span>
                    <input type="password" name="password" placeholder="비밀번호를 입력해주세요." />
                  </label>

                  <label>
                    <span>비밀번호 확인</span>
                    <input type="password" name="passwordCheck" placeholder="비밀번호 확인" />
                  </label>
                </form>
              </div>
              <div className="sub-address-inf">
                <p>배송지 정보</p>
                <form>
                  <label>
                    <span>이름</span>
                    <input type="text" name="name" placeholder="이름을 입력해주세요." />
                  </label>

                  <label>
                    <span>연락처</span>
                    <input type="tel" name="phone" placeholder="전화번호를 입력해주세요." />
                  </label>

                  <label className="address-label">
                    <span>주소</span>
                    <div>
                      <div className="add-inf-inner-top">
                        <input type="text" name="address" />
                        <button type="button">주소검색</button>
                      </div>
                      <input type="text" name="address" />
                    </div>
                  </label>

                  <label>
                    <span>요청사항</span>
                    <input type="text" placeholder="배송시 요청사항을 선택해주세요." />
                  </label>
                </form>
              </div>
            </div>
            <div className="sub-inner-left-bottom">
              {/* 주문 상품 컴포넌트 */}
              <p>주문 상품 컴포넌트</p>
            </div>
          </div>
          <div className="sub-inner-right">
            <OrderForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonMember;
