import React, { useState } from 'react';
// import { useAuthStore } from '../store/authstore';
import { Link } from 'react-router-dom';
import './sass/Login.scss';
import NoMemberLogin from '../components/NoMemberLogin';
import MemberLogin from '../components/MemberLogin';

const Login = () => {

  //로그인 상태변수
  const [isLogin, setIsLogin] = useState(true);
  const [noMember, setNoMember] = useState(false);

  // const handleNonMember = (e) => {
  //   e.preventDefault();
  //   setIsLogin(!isLogin);
  // };
  const handleSelect = (e) => {
    e.preventDefault();

    setIsLogin(!isLogin);
    setNoMember(!noMember);
  }


  // 화면
  return (
    <div className="sub-page">
      <div className="inner">
        <div className="login-wrap">
          <h2 className="section-title">로그인</h2>
          <ul className="tab-ver1">
            {/* {members.map((member, id) => (
              <li key={id}
                className={isLogin === true ? "active" : ""}>
                <Link onClick={() => setIsLogin(member)}>{member}</Link>
              </li>
            ))} */}

            <li className={isLogin === true ? "active" : ""}><Link onClick={handleSelect}>회원</Link></li>
            <li className={noMember === true ? "active" : ""}><Link onClick={handleSelect}>비회원</Link></li>
          </ul>

          {isLogin ? <MemberLogin /> : <NoMemberLogin />}
          <div>
            <Link className='btn middle primary wFull' to="/join">지금 회원가입하러 가기</Link>
            {/* <Link className='btn middle outline wFull' to="/join">지금 회원가입하러 가기</Link> */}
            {/* 추후 삭제될 내용입니다 */}
            <h1>이메일 : aaaa@gmail.com</h1>
            <h1>비밀번호 : zhddl0815</h1>
            <h1>이메일 : abc@naver.com</h1>
            <h1>비밀번호 : qwer1234</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
