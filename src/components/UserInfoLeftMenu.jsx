import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sass/UserInfoLeftMenu.scss';

const UserInfoLeftMenu = () => {
  const [liOpen, setLiOpen] = useState(null);

  const handleToggle = (index) => {
    setLiOpen(liOpen === index ? null : index);
  };

  const menuList = [
    { title: '쇼핑 정보', list: [
      {name:"주문/배송", link:"/*"},
      {name:"취소 / 교환 / 반품", link:"/*"},
      {name:"대량 주문", link:"/*"},
      {name:"찜 리스트", link:"/picklist"}
    ] },
    { title: '해택 정보', list: [
      {name:"쿠폰", link:"/*"},
      {name:"H.Point", link:"/*"},
      {name:"H.Plus", link:"/*"},
      {name:"한섬 마일리지", link:"/*"},
      {name:"SK 패션상품권", link:"/*"}
    ] },
    {
      title: '참여 & 문의',
      list: [
        {name:"1:1 문의내역", link:"/*"},
        {name:"상품 Q&A", link:"/*"},
        {name:"나의 상품 리뷰", link:"/*"},
        {name:"마이클로젯", link:"/*"},
        {name:"이벤트 응모내역", link:"/*"}
      ],
    },
    {
      title: '회원정보',
      list: [
        {name:"회원정보 수정", link:"/*"},
        {name:"H.Point 연동 관리", link:"/*"},
        {name:"배송지 관리", link:"/*"},
        {name:"원클릭 카드관리", link:"/*"},
        {name:"H.Point Pay 관리", link:"/*"},
        {name:"환불계좌 관리", link:"/*"},
        {name:"한섬 멤버십 통합", link:"/*"},
        {name:"회원탈퇴", link:"/*"}
      ],
    },
  ];

  return (
    <div className="menu-list-wrap">
      <h2>MYPAGE</h2>
      {menuList.map((item, index) => (
        <div key={index} className="menu-list">
          <button onClick={() => handleToggle(index)}>{item.title}</button>
          {liOpen === index && (
            <ul>
              {item.list.map((one, id) => {
                const isObject = typeof one === "object";
                const label = isObject ? one.name: one;
                const to = isObject ? one.link: "#";

                return(
                  <li key={id}>
                    <Link to={to}>{label}</Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserInfoLeftMenu;
