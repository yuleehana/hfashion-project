import React, { useEffect } from "react";
import { useAuthStore } from "../store/authstore";
import { useNavigate } from "react-router-dom";
import UserInfoLeftMenu from "../components/UserInfoLeftMenu";
import BuyProductList from "../components/BuyProductList";
import "./sass/UserInfo.scss";

const UserInfo = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate(); // ← navigate 함수 선언

  // ← user가 없으면 메인 페이지로 이동하도록 useEffect 추가
  useEffect(() => {
    if (!user) {
      navigate("/"); // "/" 는 메인 페이지 경로에 맞게 변경
    }
  }, [user, navigate]);

  if (!user) return null; // 로딩 대신 화면 표시 안 함

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
              <li>
                <BuyProductList />
              </li>
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
