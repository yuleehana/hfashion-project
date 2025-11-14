import React from 'react';
import BrandLiveProduct from './BrandLiveProduct';

const BrandLiveProducts = ({ mainNew, brand }) => {
  const sData = brand.filter((b) => b.id !== 1);
  return (
    <div className="brand-live-wrap">
      <div className="brand-live-wrap-left">
        <p>New</p>
        <div className="brand-live-wrap-left-img">
          {sData.map((s) => (
            <BrandLiveProduct img={s.img} id={s.id} title={s.title} price={s.price} />
          ))}
        </div>
      </div>
      <div className="main-new">
        <img src={mainNew} alt="메인new이미지" />
      </div>
    </div>
  );
};

export default BrandLiveProducts;
