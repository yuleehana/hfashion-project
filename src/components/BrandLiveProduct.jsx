import React from 'react';
import { Link } from 'react-router-dom';

const BrandLiveProduct = ({ img, id, title, price }) => {
  return (
    <>
      <Link className="sub-new-wrap">
        <div className="sub-new">
          <div className="sub-new-img">
            <img src={img} alt={id} />
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
