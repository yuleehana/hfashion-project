import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sass/join.scss';
import { useAuthStore } from '../store/authstore';

const Join = () => {
  const navigate = useNavigate();

  // 변수
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    passwordCheck: '',
    displayName: '',
    phone: '',
    email: '',
    address: '',
    address2: '',
  });

  // 비밀번호 동일변수
  const [passwordMatch, setPasswordMatch] = useState(false);
  // 비밀번호 input 진입변수
  const [passwordTouched, setPasswordTouched] = useState(false);

  const setUser = useAuthStore((state) => state.setUser);
  const { onMember } = useAuthStore();

  // 메서드
  // sotre에 저장하는 메서드
  const handleSubmit = (e) => {
    e.preventDefault();
    onMember(formData);
    alert('회원가입을 성공적으로 완료했습니다');
    console.log(formData);
    navigate('/');
  };

  const handleIdCheck = (e) => {
    alert('사용 가능한아아디입니다.');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    console.log('handleChange 호출', { name, value });
    // 비밀번호확인 메서드
    if (name === 'password' || name === 'passwordCheck') {
      setPasswordTouched(true);

      if (updatedForm.password && updatedForm.passwordCheck) {
        setPasswordMatch(updatedForm.password === updatedForm.passwordCheck);
      } else {
        setPasswordMatch(null);
      }
    }
  };

  return (
    <div className="sub-page">
      <div className="join-inner">
        <div className="join-wrap">
          <h2 className="section-title">회원가입</h2>
          <p>H.Point 통합회원 회원가입</p>
        </div>
        <form className="join-form" onSubmit={handleSubmit}>
          <label>
            <span className="label-tag">아이디</span>
            <span className="id-input-tag">
              <input
                type="text"
                name="uid"
                placeholder="아이디를 입력해주세요"
                onChange={handleChange}
                required
              />
              <button className="btn middle outline" type="button" onClick={handleIdCheck}>
                중복확인
              </button>
            </span>
          </label>
          <label>
            <span className="label-tag">비밀번호</span>
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <span className="label-tag">비밀번호확인</span>
            <span className="pass-input-tag">
              <input
                type="password"
                name="passwordCheck"
                placeholder="비밀번호를 재입력해주세요"
                onChange={handleChange}
              />
              {passwordTouched && passwordMatch === false && (
                <span style={{ color: 'red', fontSize: '14px' }}>
                  비밀번호가 일치하지 않습니다.
                </span>
              )}
              {passwordTouched && passwordMatch === true && (
                <span style={{ color: 'green', fontSize: '14px' }}> 비밀번호가 일치합니다! </span>
              )}
            </span>
          </label>

          <label>
            <span className="label-tag">이름</span>
            <input
              type="text"
              name="displayName"
              placeholder="이름를 입력해주세요"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <span className="label-tag">전화번호</span>
            <input
              type="tel"
              name="phone"
              placeholder="전화번호를 입력해주세요"
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="label-tag">이메일</span>
            <input
              type="email"
              name="email"
              placeholder="이메일을 입력해주세요"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <span className="label-tag">주소</span>
            <span className="address-input-tag">
              <span className="address-input-tag-top">
                <input
                  type="text"
                  name="address"
                  placeholder="주소를 검색해주세요"
                  onChange={handleChange}
                />
                <button className="btn middle outline" type="button">
                  주소검색
                </button>
              </span>
              <span className="address-input-tag-bot">
                <input
                  type="text"
                  name="address2"
                  placeholder="상세주소를 입력해주세요"
                  onChange={handleChange}
                />
              </span>
            </span>
          </label>
          <div className="join-button-wrap">
            <button className="btn middle outline" type="submit">
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;
