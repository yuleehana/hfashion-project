import React, { useState } from 'react';
// import { useAuthStore } from '../store/authstore';
import { Link } from 'react-router-dom';
import './sass/Login.scss';
// import MemberLogin from '../components/MemberLogin';
import NoMemberLogin from '../components/NoMemberLogin';
import MemberLogin2 from '../components/MemberLogin2';

const Login = () => {
  // 변수
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  //로그인 상태변수
  const [isLogin, setIsLogin] = useState(true);

  // 전역변수
  // const { onLogin, onGoogleLogin } = useAuthStore();

  // const navigate = useNavigate();

  // 메서드
  // 일반 로그인
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   await onLogin(email, password);

  //   // 로그인 후 메인으로
  //   navigate('/');
  // };

  // 구글 로그인
  // const handleGoogleLogin = async (e) => {
  //   await onGoogleLogin();
  //   navigate('/userinfo');
  // };

  const handleNonMember = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };
  

  // 화면
  return (
    <div className="sub-page">
      <div className="inner">
        <div className="login-wrap">
          <h2 className="section-title">로그인</h2>
          <div className="member-btn">
            <button onClick={setIsLogin}>회원</button>
            <button onClick={handleNonMember}>비회원</button>
          </div>


          {/* <form onSubmit={handleSubmit}>
                        <input type='email'
                            value={email} placeholder='아이디 또는 이메일'
                            required
                            onChange={(e) => setEmail(e.target.value)} />
                        <input type='password'
                            value={password} placeholder='비밀번호 입력 (8~15자리 영문+숫자+특수문자 조합)'
                            required
                            onChange={(e) => setPassword(e.target.value)} />

                        <div className='login-op'>
                            <div className='id-save'>
                                <img src='./images/check-icon.svg' alt='체크아이콘' />
                                <p>아이디 저장</p>
                            </div>
                            <button>아이디찾기 | 비밀번호찾기</button>
                        </div>

                        <div className='login-btn-wrap'>
                            <div className='login-btn-wrap-top'>
                                <button type='submit'>로그인하기</button>
                            </div>
                            <div className='login-btn-wrap-bottom'>
                                <button className='google' onClick={handleGoogleLogin}>Google</button>
                                <button>H point 통합회원</button>
                            </div>

                        </div>
                    </form> */}


          {isLogin ? <MemberLogin2 /> : <NoMemberLogin />}
          <div>
            <Link to="/join">지금 회원가입하러 가기</Link>
            {/* 추후 삭제될 내용입니다 */}
            <h1>이메일 : yuleehana@naver.com</h1>
            <h1>비밀번호 : zhddl0815</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
