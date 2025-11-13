import React from 'react'
import { useAuthStore } from '../store/authstore'
import { useNavigate } from 'react-router-dom';
import UserInfoLeftMenu from '../components/UserInfoLeftMenu';
import "./sass/UserInfo.scss";

const UserInfo = () => {
    const { user, onLogout } = useAuthStore();

    const navigate = useNavigate();


    // 메서드
    const handleLogout = () => {
        onLogout();
        alert('로그아웃 되었습니다')

        navigate('/')
    }


    if (!user) {
        return <p>로그인된 유저가 없습니다</p>;
    }

    return (
        <div className='sub-page'>
            <div className='content-inner'>
                <div className='user-info-left'>
                    <UserInfoLeftMenu />
                </div>

                <div className='user-info-right'>
                    {/* <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <button onClick={handleLogout}>로그아웃</button> */}
                    <div className="user-idname-box">
                        <div className="profile-box">
                            <img src="./images/my-icon-black.svg" alt="profile" />
                        </div>
                        <div className="profile-item-box">
                            <div className="item-box">
                                <div className="user-text">
                                    <p>{`<span>${user.email}(${user.name})</span>님`}</p>
                                    <p>환영합니다</p>
                                </div>
                            </div>

                            <div className="btn-box">
                                <button>로그아웃</button>
                                <button>내 회원정보</button>
                            </div>
                        </div>
                    </div>

                    <div className="point-card-box">
                        <div className="user-point-box">
                            <p>내 포인트</p>
                            <div className="point-price">
                                <span>0</span>
                                <span>P</span>
                            </div>
                        </div>
                        <div className="point-favor-list">
                            <p>내 포인트 혜택</p>
                            <div className="favor-list">
                                <div className="earn-favor">최대 5% 적립 가능</div>
                                <div className="delivery-free">N배송 무료</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo