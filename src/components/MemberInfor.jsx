import React from 'react';
import { useAuthStore } from '../store/authstore';
import UserInfoLeftMenu from './UserInfoLeftMenu';
import '../pages/sass/UserInfo.scss';
import './sass/button-normal.scss';

const MemberInfor = () => {
  const { user } = useAuthStore();
  return (
    <div className="sub-page">
      <div className="channel-wrap">
        <div className="channel"></div>
      </div>
      <div className="content-inner">
        <div className="user-info-left">
          <UserInfoLeftMenu />
        </div>

        <div className="user-info-right">
          <div className="section">
            <div className="section-title">{`${user.displayName}님의 회원 정보`}</div>
            <div className="user-information">
              <div className="information-box">
                <p className="info-th">아이디</p>
                <p className="info-td">{user.id}</p>
              </div>
              <div className="information-box">
                <p className="info-th">이름</p>
                <p className="info-td">{user.displayName}</p>
              </div>
              <div className="information-box">
                <p className="info-th">비밀번호</p>
                <p className="info-td">
                  <button className="btn small outline">비밀번호 변경</button>
                </p>
              </div>
              <div className="information-box">
                <p className="info-th">휴대폰 번호</p>
                <p className="info-td">{user.phone}</p>
              </div>
              <div className="information-box">
                <p className="info-th">이메일</p>
                <p className="info-td">{user.email}</p>
              </div>
              <div className="information-box">
                <p className="info-th">주소</p>
                <p className="info-td">
                  {user.address}
                  {user.address2}
                </p>
              </div>
            </div>
          </div>
          <div className="btn-wrap">
            <button className="btn large primary">회원정보 수정</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberInfor;
