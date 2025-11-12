import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./sass/UserInfoLeftMenu.scss";

const UserInfoLeftMenu = () => {
  const [liOpen, setLiOpen] = useState(null);

  const handleToggle = (index) => {
    setLiOpen(liOpen === index ? null : index);
  }

  const menuList = [
    {title:"쇼핑 정보", list:["주문 / 배송", "취소 / 교환 / 반품", "대량 주문"]},
    {title:"해택 정보", list:["쿠폰", "H.Point", "H.Plus", "한섬 마일리지", "SK 패션상품권"]},
    {title:"참여 & 문의", list:["1:1 문의내역", "상품 Q&A","나의 상품 리뷰", "마이클로젯", "이벤트 응모내역"]},
    {title:"회원정보", list:["회원정보 수정", "H.Point 연동 관리", "배송지 관리", "원클릭 카드관리", "H.Point Pay 관리","환불계좌 관리", "한섬 멤버십 통합", "회원탈퇴"]}
  ]

  return (
    <div className='menu-list-wrap'>
      <h2>MYPAGE</h2>
      {menuList.map((item,index) => (
        <div key={index} className="menu-list">
          <button onClick={() => handleToggle(index)}>{item.title}</button>
          {liOpen === index && (
            <ul>
              {item.list.map((one, id) => (
                <li key={id}>
                  <Link>
                    {one}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default UserInfoLeftMenu