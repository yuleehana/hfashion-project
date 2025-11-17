import React, { useEffect, useMemo, useState } from 'react'
import { useProductStore } from '../store/useProductStore'
import './sass/MainCategoryNew.scss'
import { Link } from 'react-router-dom';


const VISIBLE_COUNT = 4; // 한 화면에 보이는 상품 개수


const MainCategoryNew = () => {
  const { items, onFetchItem } = useProductStore();
  const [activeTab, setActiveTab] = useState('ALL');
  const [startIndex, setStartIndex] = useState(0); // 슬라이드 시작 인덱스

  // 첫 렌더링 때 상품 불러오기
  useEffect(() => {
    onFetchItem();
  }, [onFetchItem]);

  //  탭에 따라 상품 필터링
  const filteredItems = useMemo(() => {
    switch (activeTab) {
      case 'ALL':
        // return items.filter(item =>
        //   item.category.includes('women blouse') || item.category.includes('man pants')
        // );
        // 현재 startIndex 기준으로 번갈아 보여주기
        return items.filter((item, idx) =>
          item.category.includes(idx % 2 === 0 ? 'man' : 'women')
        );
      case 'WOMEN':
        return items.filter(item => item.category.includes('women skirt'));
      case 'MEN':
        return items.filter(item => item.category.includes('man outer'));
      case 'BAG_ACC':
        return items.filter(item => item.category.includes('sundries women bag'));
      case 'GOLF':
        return items.filter(item => item.category.includes('golf etc'));
      default:
        return items;
    }
  }, [items, activeTab]);

  // 슬라이드 관련
  const maxIndex = Math.max(0, filteredItems.length - VISIBLE_COUNT);
  const visibleItems = filteredItems.slice(
    startIndex,
    startIndex + VISIBLE_COUNT
  );

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
    setStartIndex(0); // 탭 바꾸면 처음으로
  };

  return (
    <section>
      <h2>CATEGORY NEW</h2>
      <div className='container'>
        {/* 탭 */}
        <div className="categorynew-tabs">
          <button
            className={activeTab === 'ALL' ? 'active' : ''}
            onClick={() => handleChangeTab('ALL')}
          >
            ALL
          </button>
          <button
            className={activeTab === 'WOMEN' ? 'active' : ''}
            onClick={() => handleChangeTab('WOMEN')}
          >
            WOMEN
          </button>
          <button
            className={activeTab === 'MEN' ? 'active' : ''}
            onClick={() => handleChangeTab('MEN')}
          >
            MEN
          </button>
          <button
            className={activeTab === 'BAG_ACC' ? 'active' : ''}
            onClick={() => handleChangeTab('BAG_ACC')}>
            BAG & ACC
          </button>

          <button
            className={activeTab === 'GOLF' ? 'active' : ''}
            onClick={() => handleChangeTab('GOLF')}>
            GOLF
          </button>

          <Link to="" className='categorynew-tab-all'>
            전체보기 <img src="/images/all-view-right-arrow.png" alt="" />
          </Link>

        </div>

        {/* 슬라이드 영역 */}
        <div className="categorynew-slider-wrapper">
          <button
            className="arrow-btn left"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <img src="/images/button/btn-slide-prev.svg" alt="이전" />
          </button>

          <div className="categorynew-product-list">
            {visibleItems.map((item) => (
              <Link
                key={item.code}
                to={`/product-detail/${item.code}`}   // ★ 상세 페이지로 이동
                className="product-card"
              >

                <div className="categorynew-product-img">
                  <img src={item.thumbImg} alt={item.title} />
                </div>

                {/* hover 시에만 보이는 영역 */}
                <div className="categorynew-overlay-info">
                  <p className="categorynew-name">{item.title}</p>
                  <p className="categorynew-price">
                    {/* 세일 가격 */}
                    <span className="categorynew-sale-price">
                      {item.price.toLocaleString()}원
                    </span>

                    {/*원래 가격*/}
                    <del className="categorynew-original-price">
                      {/* 소수점 안 나오게 */}
                        {Math.round(item.price * 1.25).toLocaleString()}원 
                    </del>

                    {/*할인 퍼센트*/}
                    <span className="categorynew-discount">
                      20%
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <button
            className="arrow-btn right"
            onClick={handleNext}
            disabled={startIndex === maxIndex}
          >
            <img src="/images/button/btn-slide-next.svg" alt="다음" />
          </button>
        </div>
      </div>


    </section>
  )
}

export default MainCategoryNew