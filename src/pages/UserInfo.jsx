import React from 'react'
import { useAuthStore } from '../store/authstore'
import { Link, useNavigate } from 'react-router-dom';
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
                    <div className="content-profile-point section">
                        {/* <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <button onClick={handleLogout}>로그아웃</button> */}
                        <div className="user-idname-box section-title">
                            {`${user.email}(${user.name})님, 환영합니다!`}
                        </div>

                        <div className="favor-list-wrap">
                            <div className="favor-list-box">
                                <div className="list-box">
                                    <div className="list-name">
                                        멤버쉽등급&gt;
                                    </div>
                                    <p>Friend</p>
                                </div>

                                <div className="inlist-box">
                                    <div className="list-box">
                                        <div className="list-name">
                                            멤버쉽등급&gt;
                                        </div>
                                        <p>15</p>
                                    </div>

                                    <div className="list-box">
                                        <div className="list-name">
                                            상품리뷰&gt;
                                        </div>
                                        <p>21</p>
                                    </div>

                                    <div className="list-box">
                                        <div className="list-name">
                                            적립금&gt;
                                        </div>
                                        <p>1500</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="recent-orders section">
                        <div className="section-title">최근 주문</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo