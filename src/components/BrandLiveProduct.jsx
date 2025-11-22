import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePickStore } from '../store/usePickStore';

const BrandLiveProduct = ({ thumbImg, id, title, price, code }) => {
  //찜리스트 전역변수
  const { pickLists, onAddWishList } = usePickStore();

  //active변수
  const isActive = pickLists.some((p) => p.code === code);

  return (
    <>
      <Link to={`/product-detail/${code}`} className="sub-new-wrap">
        <div className="sub-new">
          <div className="sub-new-img ">
            <img src={thumbImg} alt={id} />
            <span
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onAddWishList({ thumbImg, title, price, code });
              }}
              className={`heart ${isActive ? 'active' : ''}`}
            ></span>
          </div>
          <div className="sub-new-textbox">
            <p className="sub-new-title">{title}</p>
            <p className="sub-new-text">
              <span className="sub-new-price">{price.toLocaleString()}</span>
              <span className="sub-new-saleprice">{price * 0.8}</span>
              <span className="sub-new-sale">20%</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BrandLiveProduct;
