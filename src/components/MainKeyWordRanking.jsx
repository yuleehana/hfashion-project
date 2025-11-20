import React, { useState } from 'react';
import RankingItem from './RankingItem';
import { Link, useNavigate } from 'react-router-dom';
import "./sass/MainKeyWordRanking.scss";
import {menuRankProduct} from "../data/menuRankProduct.js";

const MainKeyWordRanking = () => {
  const [liMenu, setLiMenu] = useState(0);
  const navigate = useNavigate();

  

  const handleHover = (index) => {
    if (liMenu === index) return; // 같은 메뉴 누르면 그대로 유지
    setLiMenu(index);
    // const menuname = menuRankProduct[index].link;
    // if (menuname) navigate(menuname);
  }
  const handleClick = (index) => {
    const link = menuRankProduct[index].link;
    if (link) navigate(link);
  }
  const handleMainImageClick = () => {
    const imgItem = menuRankProduct[liMenu].rightMainData[0];
    navigate(`/product-detail/${imgItem.code}`);
  }
  const handleRankClick = (code) => {
    navigate(`/product-detail/${code}`);
  }

  return (
    <section className="KWR-wrap">
      <div className="main-sec-inner">
        <div className="sec-inner-left">
          <h2 className="section-title">KEYWORD<br />RANKING</h2>

          <div className="ranking-item-wrap">
            {menuRankProduct.map((item,index) => (
              <div key={index} className='ranking-item'>
                <button type="button"
                  onMouseEnter={() => handleHover(index)}
                  onClick={() => handleClick(index)}
                >
                  <span>{item.id}</span>{item.title}
                </button>
                {liMenu === index && (
                  <ul>
                    {item.rank.map((it,id) => (
                      <li key={id} style={{backgroundImage:`url(${it.img})`}}
                        onClick={() => handleRankClick(it.code)}
                        className='rank-item'
                      >
                        <p className='brand-title'>{it.brand}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {liMenu !== null && (
          <div className='sec-inner-right'>
            <div className="kwr-main-img"
              style={{
                backgroundImage: `url(${menuRankProduct[liMenu].rightMainData[0].img})`
              }}
              onClick={handleMainImageClick}
            >
              <div className="kwr-main-text-wrap">
                <div className="kwr-main-text">
                  <p className="item-brand">
                    {menuRankProduct[liMenu].rightMainData[0].brand}
                  </p>
                  <p className="item-title">
                    {menuRankProduct[liMenu].rightMainData[0].title}
                  </p>
                </div>
              </div>
            </div>

            <div className="kwr-sub-img-wrap">
              <div className="showing-khsn">
                <div className="top-item">
                  <p className='khsn-title'>추워진 날씨</p>
                  <p className='khsn-item'>옷장의 계절을 바꿀 타이밍</p>
                </div>
                <button type="button"
                  onClick={() => handleClick(liMenu)}
                  className='more-btn'
                >
                  더보기
                </button>
              </div>
              {menuRankProduct[liMenu].rank.slice(0,3).map((it) => (
                <div className='kwr-sub-img'
                  key={it.id} style={{backgroundImage:`url(${it.img})`}}
                  onClick={() => handleRankClick(it.code)}
                >
                  <div className='kwr-sub-text-wrap'>
                    <div className='kwr-sub-text'>
                      <p className="brand">{it.brand}</p>
                      <p className="title">{it.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainKeyWordRanking;
