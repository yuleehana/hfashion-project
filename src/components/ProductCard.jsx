import React, { useState } from 'react';
import './sass/ProductCard.scss';
import { usePickStore } from '../store/usePickStore';

const ProductCard = ({ sendItem, isBestSeller = false, rank }) => {
  //하트 체크여부
  const [isActive, setIsActive] = useState(null);

  //전역변수 -> 찜추가 메서드, 찜리스트
  const { onAddWishList, pickLists } = usePickStore();

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive(!isActive);
    onAddWishList(sendItem);
    console.log(pickLists);
  };

  //
  const isPick = pickLists.some((pick) => pick.code === sendItem.code);

  const price = sendItem?.price ?? 0;

  return (
    <>
      <div className="img-box">
        <img src={sendItem.thumbImg} alt={sendItem.title} />

        {/* * 조건부 렌더링 (if/else 역할)을 위한 삼항 연산자 사용 */}
        {isBestSeller ? (
          // * isBestSeller가 true일 때 표시할 태그 tn
          <span className="best-rank">{rank}</span>
        ) : (
          // * isBestSeller가 false일 때 표시할 찜하기(하트) 버튼
          <span
            className={`favorite ${isPick ? 'active' : ''}`}
            onClick={handleFavoriteClick}
          ></span>
        )}
      </div>
      <div className="text-box">
        <p className="brand">{sendItem.brand}</p>
        <p className="title">
          <strong>{sendItem.title}</strong>
        </p>
        <p className="price">
          <span>
            <span className="sale-price">{(price * 0.8).toLocaleString()}원</span>
            <del>{price.toLocaleString()}</del>
          </span>
          <span className="sale">20%</span>
        </p>
      </div>
    </>
  );
};

export default ProductCard;
