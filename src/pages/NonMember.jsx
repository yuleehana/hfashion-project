import React, { useState } from 'react';
import './sass/NonMember.scss';
import PayItem from '../components/PayItem';
import NonCartPo from '../components/NonCartPo';
import { useCartStore } from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authstore';

const NonMember = () => {
  const { onNMember, onNAddress, setNoncart } = useAuthStore();

  const { checkedTotalPrice, cartItems } = useCartStore();

  const checkedList = cartItems.filter((c) => c.checked);
  const navigate = useNavigate();

  //비회원 data저장내용

  //주문자 정보
  const [nonFormDat, setNonFormData] = useState({
    oname: '',
    ophone: '',
    oemail: '',
    opassword: '',
    opasswordcheck: '',
  });

  //배송지 정보
  const [nonAddress, setNonAddress] = useState({
    nname: '',
    nphone: '',
    naddress: '',
    naddress2: '',
    nrequest: '',
  });

  //주문자정보 -> 상태변수에 저장메서드
  const handleNonFormData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const updateNform = { ...nonFormDat, [name]: value };
    setNonFormData(updateNform);
  };
  console.log(nonFormDat);

  //배송지정보 -> 상태변수에 저장메서드
  const handleNonAddress = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const updateAddress = { ...nonAddress, [name]: value };
    setNonAddress(updateAddress);
  };
  console.log(nonAddress);
  console.log('체크된 아이템', checkedList);

  //주문자정보 저장 메서드
  const handelsubmit = async () => {
    // e.preventDefault();
    if (!nonFormDat.oname.trim()) {
      return alert('주문자 이름이 없습니다.');
    } else if (!nonFormDat.ophone.trim()) {
      return alert('주문자 전화번호가 없습니다.');
    } else if (!nonFormDat.oemail.trim()) {
      return alert('주문자 이메일이 없습니다.');
    } else if (!nonFormDat.opassword.trim()) {
      return alert('주문 비밀번호가 없습니다.');
    } else if (!nonFormDat.opasswordcheck.trim()) {
      return alert('주문 비밀번호가 없습니다.');
    } else if (!nonAddress.nname) {
      return alert('수령자 이름이 없습니다.');
    } else if (!nonAddress.nphone) {
      return alert('수령자 전화번호가 없습니다.');
    } else if (!nonAddress.naddress) {
      return alert('발송 주소가 없습니다.');
    } else if (!nonAddress.naddress2) {
      return alert('발송 주소가 없습니다.');
    } else if (!nonAddress.nrequest) {
      return alert('발송 요청사항이 없습니다.');
    }

    await onNMember(nonFormDat);
    await onNAddress(nonAddress);

    setNoncart({
      items: checkedList,
      totalPrice: checkedTotalPrice,
    });
    navigate('/nonpay');
  };

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
                    <input
                      type="text"
                      name="oname"
                      placeholder="이름을 입력해주세요."
                      onChange={(e) => handleNonFormData(e)}
                    />
                  </label>

                  <label>
                    <span>연락처</span>
                    <input
                      type="tel"
                      name="ophone"
                      placeholder="전화번호를 입력해주세요."
                      onChange={(e) => handleNonFormData(e)}
                    />
                  </label>

                  <label>
                    <span>이메일</span>
                    <input
                      type="email"
                      name="oemail"
                      placeholder="이메일을 입력해주세요."
                      onChange={(e) => handleNonFormData(e)}
                    />
                  </label>

                  <label>
                    <span>주문비밀번호</span>
                    <input
                      type="password"
                      name="opassword"
                      placeholder="비밀번호를 입력해주세요."
                      onChange={(e) => handleNonFormData(e)}
                    />
                  </label>

                  <label>
                    <span>비밀번호 확인</span>
                    <input
                      type="password"
                      name="opasswordcheck"
                      placeholder="비밀번호 확인"
                      onChange={(e) => handleNonFormData(e)}
                    />
                  </label>

                  <div>
                    {/* <button type="button" onClick={handelsubmit}>
                      주문자정보저장
                    </button> */}
                  </div>
                </form>
              </div>
              <div className="sub-address-inf">
                <p>배송지 정보</p>
                <form>
                  <label>
                    <span>이름</span>
                    <input
                      type="text"
                      name="nname"
                      onChange={(e) => handleNonAddress(e)}
                      placeholder="이름을 입력해주세요."
                    />
                  </label>

                  <label>
                    <span>연락처</span>
                    <input
                      type="tel"
                      name="nphone"
                      onChange={(e) => handleNonAddress(e)}
                      placeholder="전화번호를 입력해주세요."
                    />
                  </label>

                  <label className="address-label">
                    <span>주소</span>
                    <div>
                      <div className="add-inf-inner-top">
                        <input type="text" name="naddress" onChange={(e) => handleNonAddress(e)} />
                        <button type="button" className="btn middle outline">
                          주소검색
                        </button>
                      </div>
                      <input type="text" name="naddress2" onChange={(e) => handleNonAddress(e)} />
                    </div>
                  </label>

                  <label>
                    <span>요청사항</span>
                    <input
                      type="text"
                      name="nrequest"
                      placeholder="배송시 요청사항을 선택해주세요."
                      onChange={(e) => handleNonAddress(e)}
                    />
                  </label>
                  <div>
                    {/* <button type="button" onClick={handelsubmit}>
                      배송지정보저장
                    </button> */}
                  </div>
                </form>
              </div>
            </div>
            <p>주문상품</p>
            <div className="sub-inner-left-bottom">
              <PayItem />
            </div>
          </div>
          <NonCartPo sendNonData={handelsubmit} pirce={checkedTotalPrice} />
        </div>
      </div>
    </div>
  );
};

export default NonMember;
