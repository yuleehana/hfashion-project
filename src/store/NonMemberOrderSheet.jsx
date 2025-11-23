import React from 'react';
import { useAuthStore } from './authstore';
import { useNavigate } from 'react-router-dom';

const NonMemberOrderSheet = () => {
  const { nuser, naddress, nonCart } = useAuthStore();
  console.log(nonCart);

  const navigate = useNavigate('');
  return (
    <div>
      <h2>비회원 주문이 성공적으로 완료 되었습니다.</h2>
      <p>주문자: {nuser.oname}</p>
      <p>전화번호: {nuser.ophone}</p>
      <p>
        주소: {naddress.naddress} {naddress.naddress2}
      </p>
      <h3>주문상품</h3>
      {nonCart.items.map((n) => (
        <p>
          {n.title} / {n.size} /{n.count}개
        </p>
      ))}
      <p>총 결제금액: {nonCart.totalPrice.toLocaleString()}원</p>
      const navigate = useNavigate('/');
      <p onClick={navigate('/')}>1234</p>
    </div>
  );
};

export default NonMemberOrderSheet;
