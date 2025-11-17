import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sass/UserInfoLeftMenu.scss';

const UserInfoLeftMenu = () => {
  const [liOpen, setLiOpen] = useState(null);
  const navigate = useNavigate();

    const menuList = [
    { title: '쇼핑 정보', link: '', list: [
      {name:"주문/배송", link:"/userinfo/:notfoundmypage"},
      {name:"취소 / 교환 / 반품", link:"/userinfo/:notfoundmypage"},
      {name:"대량 주문", link:"/userinfo/:notfoundmypage"},
      {name:"찜 리스트", link:"/picklist"}
    ] },
    { title: '해택 정보', link: '', list: [
      {name:"쿠폰", link:"/userinfo/:notfoundmypage"},
      {name:"H.Point", link:"/userinfo/:notfoundmypage"},
      {name:"H.Plus", link:"/userinfo/:notfoundmypage"},
      {name:"한섬 마일리지", link:"/userinfo/:notfoundmypage"},
      {name:"SK 패션상품권", link:"/userinfo/:notfoundmypage"}
    ] },
    {
      title: '참여 & 문의', link: '',
      list: [
        {name:"1:1 문의내역", link:"/userinfo/:notfoundmypage"},
        {name:"상품 Q&A", link:"/userinfo/:notfoundmypage"},
        {name:"나의 상품 리뷰", link:"/userinfo/:notfoundmypage"},
        {name:"마이클로젯", link:"/userinfo/:notfoundmypage"},
        {name:"이벤트 응모내역", link:"/userinfo/:notfoundmypage"}
      ],
    },
    {
      title: '회원정보',
      link:"/userinfo/memberinfor",
      list: [
        {name:"회원정보 수정", link:"/userinfo/:notfoundmypage"},
        {name:"H.Point 연동 관리", link:"/userinfo/:notfoundmypage"},
        {name:"배송지 관리", link:"/userinfo/:notfoundmypage"},
        {name:"원클릭 카드관리", link:"/userinfo/:notfoundmypage"},
        {name:"H.Point Pay 관리", link:"/userinfo/:notfoundmypage"},
        {name:"환불계좌 관리", link:"/userinfo/:notfoundmypage"},
        {name:"한섬 멤버십 통합", link:"/userinfo/:notfoundmypage"},
        {name:"회원탈퇴", link:"/userinfo/:notfoundmypage"}
      ],
    },
  ];

  const handleToggle = (index) => {
    setLiOpen(liOpen === index ? null : index);
    
    const pathname = menuList[index].link;
    if (pathname) navigate(pathname);
  };

  return (
    <div className="menu-list-wrap">
      <h2>MYPAGE</h2>
      {menuList.map((item, index) => (
        <div key={index} className="menu-list">
          <button onClick={() => handleToggle(index)}>{item.title}</button>
          {liOpen === index && (
            <ul>
              {item.list.map((one, id) => (
                <li key={id}>
                  <Link to={one.link}>{one.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserInfoLeftMenu;
