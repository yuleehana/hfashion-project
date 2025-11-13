import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authstore';
import "./sass/MemberLogin.scss"

const MemberLogin2 = () => {
    // 변수
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // 전역
    const { onLogin, onGoogleLogin } = useAuthStore();
    const navigate = useNavigate();


    // 메서드
    // 일반 로그인
    const handleSubmit = async (e) => {
        e.preventDefault();

        await onLogin(email, password);

        // 로그인 후 메인으로 이동
        navigate('/');
    };

    // 구글 로그인
    const handleGoogleLogin = async (e) => {

        await onGoogleLogin();
        navigate('/');
    };




    return (
        <form className='login-wrap' onSubmit={handleSubmit}>
            <div className='input-wrap'>
                <input type="email"
                    value={email}
                    required
                    placeholder='아이디 또는 이메일'
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="password"
                    value={password}
                    required
                    placeholder='비밀번호 입력 (8~15자리 영문+숫자+특수문자 조합)'
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="idTag">
                <p className='rememberId'>아이디 저장</p>
                <p className='findIdPw'>
                    <span className='findId'>
                        <Link>아이디 찾기</Link>
                    </span>
                    <span className='findPw'>
                        <Link>비밀번호 찾기</Link>
                    </span>
                </p>
            </div>
            <div className="button-grid-wrap">
                <button type='submit' onSubmit={handleSubmit}>로그인하기</button>
                <button onClick={handleGoogleLogin}>구글 로그인</button>
                <button>카카오 로그인</button>
            </div>

        </form>
    )
}

export default MemberLogin2