import React from 'react';
import './sass/NoMemberLogin.scss';

const NoMemberLogin = () => {
  return (
    <div className="no-member-wrap">
      <form className="noMember-login">
        <input type="text" placeholder="이메일/SMS를 통해 받으신 주문번호를 입력해주세요" />
        <input type="text" placeholder="주문시 입력하신 휴대폰번호를 입력해주세요" />
        <button>상품조회하기</button>
        <p>주문번호를 모르신다면,고객센터 1800-5700로 문의해주시기 바랍니다.</p>
      </form>
    </div>
  );
};

export default NoMemberLogin;
