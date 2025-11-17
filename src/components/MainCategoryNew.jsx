import React, { useEffect, useMemo, useState } from 'react'
import { useProductStore } from '../store/useProductStore'
import './sass/MainCategoryNew.scss'


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
    if (activeTab === 'ALL') return items;

    if (activeTab === 'MEN') {
      return items.filter(
        (item) =>
          item.category.startsWith('man')
      );
    }

    if (activeTab === 'WOMEN') {
      return items.filter(
        (item) =>
          item.category.startsWith('women')
      );
    }

    if (activeTab === 'BAG_ACC') {
      // 잡화/가방류
      return items.filter((item) => item.category.startsWith('sundries'));
    }

    if (activeTab === 'GOLF') {
      //
      return items.filter((item) =>
        item.category.startsWith('golf')   // ← 실제 카테고리 키에 맞게 수정!
      );
    }
    return items;
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
              <div key={item.code} className="product-card">
                <div className="categorynew-product-img">
                  <img src={item.thumbImg} alt={item.title} />
                </div>

                {/* hover 시에만 보이는 영역 */}
                <div className="categorynew-overlay-info">
                  <p className="name">{item.title}</p>
                  <p className="price">
                    {/* 세일 가격 */}
                    <span className="price">
                      {item.price.toLocaleString()}원
                    </span>

                    {/* 원래 가격
                    <span className="original-price">
                      {item.price.toLocaleString()}원
                    </span>

                    할인 퍼센트
                    <span className="discount">
                      -{item.discount}%
                    </span> */}
                  </p>
                </div>
              </div>
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