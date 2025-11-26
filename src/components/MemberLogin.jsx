import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authstore";
import "./sass/MemberLogin.scss";

const MemberLogin = () => {
  // 변수
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // [KIM add save id 11-23] 아이디 저장 체크박스 상태를 관리하는 state를 추가
  const [rememberId, setRememberId] = useState(false);

  // 전역
  const { onLogin, onGoogleLogin } = useAuthStore();
  const navigate = useNavigate();

  // [KIM add save id 11-23] 저장된 체크 상태를 확인
  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
      setEmail(savedEmail); // 저장된 이메일이 있다면 불러오기
      setRememberId(true); // 저장된 이메일이 있다면 체크 상태로 설정
    }
  }, []);

  // [KIM add save id 11-23] 체크박스 상태 변경 핸들러 추가
  const handleRememberIdChange = (e) => {
    const isChecked = e.target.checked;
    setRememberId(isChecked);

    if (!isChecked) {
      // 체크가 해제되는 즉시 저장된 이메일을 삭제.
      // 새로고침 시 이메일이 로드되지 않아 체크 상태로 돌아가지 않음
      localStorage.removeItem("savedEmail");
    }
  };
  //store 전역변수
  const { onKakaoLogin } = useAuthStore();

  // 메서드
  // 일반 로그인
  const handleSubmit = async (e) => {
    e.preventDefault();

    // [KIM add save id 11-23] 체크되어 있는 경우에만 저장
    if (rememberId) {
      localStorage.setItem("savedEmail", email);
    }

    await onLogin(email, password);

    // 로그인 후 메인으로 이동
    navigate("/");
  };

  // 구글 로그인
  const handleGoogleLogin = async (e) => {
    await onGoogleLogin();
    navigate("/");
  };
  //카카오 로그인
  const handleKakaoLogin = async () => {
    await onKakaoLogin(navigate);
  };

  return (
    <form className="login-wrap" onSubmit={handleSubmit}>
      <div className="input-wrap">
        <input
          type="email"
          value={email}
          required
          placeholder="아이디 또는 이메일"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          required
          placeholder="비밀번호 입력 (8~15자리 영문+숫자+특수문자 조합)"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="idTag">
        {/*[KIM add save id 11-23] */}
        <label className="rememberId">
          <input
            type="checkbox"
            checked={rememberId}
            onChange={handleRememberIdChange}
          />
          아이디 저장
        </label>

        <p className="findIdPw">
          <span className="findId">
            <Link>아이디 찾기</Link>
          </span>
          <span className="findPw">
            <Link>비밀번호 찾기</Link>
          </span>
        </p>
      </div>
      <div className="button-grid-wrap">
        <button type="submit" className="btn middle primary" onSubmit={onLogin}>
          로그인하기
        </button>
        <button
          type="button"
          className="btn middle outline"
          onClick={handleGoogleLogin}
        >
          구글 로그인
        </button>
        <button
          type="button"
          className="btn middle outline kakao"
          onClick={handleKakaoLogin}
        >
          Kakao 로그인
        </button>
      </div>
    </form>
  );
};

export default MemberLogin;
