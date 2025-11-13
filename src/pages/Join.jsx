import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sass/join.scss';

const Join = () => {
  const navigate = useNavigate();

  // 변수
  const [formData, setFormData] = useState({
    uid: '',
    password: '',
    passwordCheck: '',
    name: '',
    phone: '',
    nickName: '',
    email: '',
    address: '',
  });

  // 메서드
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('회원가입을 성공적으로 완료했습니다');
    // navigate('/login');
    console.log(formData);
  };

  const handleIdCheck = (e) => {
    alert('사용 가능한아아디입니다.');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
            <span>아이디</span>
            <input
              type="text"
              name="uid"
              value={null}
              placeholder="이름을 입력해주세요"
              onChange={handleChange}
            />
            <button type="button" onClick={handleIdCheck}>
              중복확인
            </button>
          </label>
          <label>
            <span>비밀번호</span>
            <input
              type="password"
              name="password"
              value={null}
              placeholder="비밀번호를 입력해주세요"
              onChange={handleChange}
            />
          </label>
          <label>
            <span>비밀번호확인</span>
            <input
              type="password"
              name="passwordCheck"
              value={null}
              placeholder="비밀번호를 재입력해주세요"
              onChange={handleChange}
            />
          </label>
          <label>
            <span>이름</span>
            <input
              type="text"
              name="name"
              value={null}
              placeholder="이름를 입력해주세요"
              onChange={handleChange}
            />
          </label>
          <label>
            <span>전화번호</span>
            <input
              type="tel"
              name="phone"
              value={null}
              placeholder="전화번호를 입력해주세요"
              onChange={handleChange}
            />
          </label>
          <label>
            <span>이메일</span>
            <input
              type="email"
              name="email"
              value={null}
              placeholder="이메일을 입력해주세요"
              onChange={handleChange}
            />
          </label>
          <label>
            <span>주소</span>
            <input
              type="text"
              name="address"
              value={null}
              placeholder="주소를 검색해주세요"
              onChange={handleChange}
            />
            <button type="button">주소검색</button>
            <div>
              <input
                type="text"
                name="address2"
                placeholder="상세주소를 입력해주세요"
                onChange={handleChange}
              />
            </div>
          </label>

          <button type="submit">회원가입</button>
        </form>

        <p>
          이미 계정이 있으신가요?<Link to="/login">로그인하기</Link>
        </p>
      </div>
    </div>
  );
};

export default Join;
