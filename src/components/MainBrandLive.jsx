import React, { useState } from 'react';
import BrandLiveProducts from './BrandLiveProducts';
import './sass/brandlive.scss';

const brandData = [
  [
    { id: 1, img: '/images/products/RA2F9ABG136KBK/thumbnail.jpg' },
    {
      id: 2,
      img: '/images/products/RA2F7ABG024WDB/thumbnail.jpg',
      title: '모데나 호보 스웨이드',
      price: 378000,
      originPrice: '',
      sale: '20%',
    },
    {
      id: 3,
      img: 'images/products/RA2F7ABG291WBK/thumbnail.jpg',
      title: '레체 숄더 L',
      price: 328000,
      originPrice: '',
      sale: '20%',
    },
    {
      id: 4,
      img: '/images/products/RA2F7ABG292WBS/thumbnail.jpg',
      title: '레체 버킷 M',
      price: 278000,
      originPrice: '',
      sale: '20%',
    },
  ],
  [
    { id: 1, img: '/images/products/T12F6WPC030MT1AEH/thumbnail.jpg' },
    {
      id: 2,
      img: '/images/products/T12F7QOT723ML1AEG/thumbnail.jpg',
      title: '퍼 칼라 머스코비 다운',
      price: 659000,
      originPrice: '',
      sale: ' 20%',
    },
    {
      id: 3,
      img: '/images/products/T12F7QOT714ML1BDS/thumbnail.jpg',
      title: '나일론 라이트 다운',
      price: 399000,
      originPrice: '',
      sale: ' 20%',
    },
    {
      id: 4,
      img: '/images/products/T12F7QOT714ML1BDS/thumbnail.jpg',
      title: '릴랙스 배지 테디 재킷',
      price: 229000,
      originPrice: '',
      sale: ' 20%',
    },
  ],
  [
    { id: 1, img: '/images/products/PW2E9WPC802NDG/thumbnail.jpg' },
    {
      id: 2,
      img: '/images/products/PW2F3WPC804WOW/thumbnail.jpg',
      title: '스팽글 쇼츠',
      price: 94000,
      originPrice: '',
      sale: ' 20%',
    },
    {
      id: 3,
      img: '/images/products/PW2F3WPC802WLG/thumbnail.jpg',
      title: '사이드 시어링 나일론 팬츠',
      price: 118000,
      originPrice: '',
      sale: ' 20%',
    },
    {
      id: 4,
      img: '/images/products/PW2E9WPC802NDG/thumbnail.jpg',
      title: '체크 울 팬츠s',
      price: 71700,
      originPrice: '',
      sale: ' 20%',
    },
  ],
];

const MainBrandLive = () => {
  const brandCate = ['ROUGE&LOUNG', 'TOMMY JEANS', 'SJYP'];

  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  //메인이미지
  const mainNew = brandData.map((group) => group.find((v) => v.id === 1).img);

  return (
    <section className="brand-live-section">
      <h2>BRAND LIVE</h2>
      <div className="container">
        <ul>
          {brandCate.map((bCate, id) => (
            <li
              key={id}
              onClick={() => handleClick(id - 1)}
              className={activeIndex === id ? 'active' : ''}
            >
              {bCate}
            </li>
          ))}
        </ul>
        <div
          className="live-section-wrap"
          style={{
            transform: `translateX(${1 - activeIndex * 33}%)`,
          }}
        >
          {brandData.map((bData, index) => (
            <BrandLiveProducts
              key={index}
              mainNew={bData.find((b) => b.id === 1).img}
              brand={bData}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainBrandLive;
