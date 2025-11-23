// import React from 'react';
// import { useAuthStore } from '../store/authstore';
// import { Link, useNavigate } from 'react-router-dom';
// import UserInfoLeftMenu from '../components/UserInfoLeftMenu';
// import './sass/UserInfo.scss';
// import BuyProductList from '../components/BuyProductList';

// const UserInfo = () => {
//   const { user, onLogout } = useAuthStore();

//   const navigate = useNavigate();

//   // 메서드
//   const handleLogout = () => {
//     onLogout();
//     alert('로그아웃 되었습니다');

//     navigate('/');
//   };

//   if (!user) {
//     return <p>로딩중...</p>;
//   }

//   return (
//     <div className="sub-page">
//       <div className="content-inner">
//         <div className="user-info-left">
//           <UserInfoLeftMenu />
//         </div>

//         <div className="user-info-right">
//           <div className="content-profile-point section">
//             <div className="user-idname-box section-title">
//               {`${user.email}(${user.displayName})님, 환영합니다!`}
//             </div>

//             <div className="favor-list-wrap">
//               <div className="favor-list-box">
//                 <div className="list-box">
//                   <div className="list-name">멤버쉽등급&gt;</div>
//                   <p>Friend</p>
//                 </div>

//                 <div className="inlist-box">
//                   <div className="list-box">
//                     <div className="list-name">멤버쉽등급&gt;</div>
//                     <p>15</p>
//                   </div>

//                   <div className="list-box">
//                     <div className="list-name">상품리뷰&gt;</div>
//                     <p>21</p>
//                   </div>

//                   <div className="list-box">
//                     <div className="list-name">적립금&gt;</div>
//                     <p>1500</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="recent-orders section">
//             <div className="section-title">최근 주문</div>
//             <div className="orders-product-table">
//               <div className="orders-product-list">
//                 <ul className="orders-list-box">
//                   <li>
//                     <BuyProductList />
//                   </li>
//                   <li>
//                     <BuyProductList />
//                   </li>
//                 </ul>
//               </div>

//               <div className="product-btn-list">
//                 <div className="button-wrap">
//                   <button>주문/배송 조회</button>
//                 </div>
//                 <p>|</p>
//                 <div className="button-wrap">
//                   <button>
//                     취소/교환/반품 <span>0</span>건
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserInfo;
import React from 'react';
import { useAuthStore } from '../store/authstore';
import UserInfoLeftMenu from '../components/UserInfoLeftMenu';
import BuyProductList from '../components/BuyProductList';
import './sass/UserInfo.scss';

const UserInfo = () => {
  const { user } = useAuthStore();

  if (!user) return <p>로딩중...</p>;

  return (
    <div className="sub-page">
      <div className="content-inner">
        {/* LEFT MENU */}
        <div className="user-info-left">
          <UserInfoLeftMenu />
        </div>

        {/* RIGHT CONTENT */}
        <div className="user-info-right">

          {/* PROFILE SECTION */}
          <div className="profile-section">
            <div className="username">
              {`${user.email}(${user.displayName})님, 환영합니다!`}
            </div>

            {/* ---- 메인 4개 박스 ---- */}
            <div className="info-summary">
              <div className="summary-box">
                <span className="box-label">멤버십등급 &gt;</span>
                <span className="box-value">Friend</span>
              </div>

              <div className="summary-box">
                <span className="box-label">쿠폰 &gt;</span>
                <span className="box-value">15</span>
              </div>

              <div className="summary-box">
                <span className="box-label">상품리뷰 &gt;</span>
                <span className="box-value">21</span>
              </div>

              <div className="summary-box">
                <span className="box-label">적립금 &gt;</span>
                <span className="box-value">1500</span>
              </div>
            </div>
          </div>

          {/* RECENT ORDERS */}
          <div className="recent-orders-section">
            <h2 className="section-title">최근 주문</h2>

            <ul className="order-list">
              <li><BuyProductList /></li>
              <li><BuyProductList /></li>
            </ul>

            <div className="order-button-box">
              <button>주문/배송 조회</button>
              <p>|</p>
              <button>취소/교환/반품 0건</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserInfo;
