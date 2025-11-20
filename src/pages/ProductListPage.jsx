import React, { useState } from 'react';
import { useProductStore } from '../store/useProductStore';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import './sass/ProductListPage.scss';
import Pagination from '../components/Pagination'; // Pagination 컴포넌트 필요
import usePagination from '../hooks/usePagination'; // 커스텀 훅 임포트
import { all } from 'axios';

const ProductListPage = ({ category }) => {
  const { onItemsCategory } = useProductStore();

  // 1. 전체 목록을 가져옴
  const allItems = onItemsCategory(category);
  //필터된 애들을 담을변수
  const [items, setItems] = useState(allItems);

  //가격을 담을변수
  const [filterPrice, setFilterPrice] = useState(null);
  const [filterPrice2, setFilterPrice2] = useState(null);

  // 2. 커스텀 훅 호출! 모든 페이지네이션 로직이 캡슐화됨
  const { currentItems, currentPage, totalPages, handlePageChange } = usePagination(items, 40);
  // (전체 목록, 페이지당 개수) 전달

  //allitems에서 브랜드추출
  const itemBrands = allItems
    .map((item) => item.brand)
    .filter((brand, index, self) => self.indexOf(brand) === index);

  //제조국 추출
  const itemMades = allItems.map((item) => item.made).filter((m, id, all) => all.indexOf(m) === id);

  // 가격관련 btn생성 배열
  const priceRange = [
    { name: '10만원 이하', value: 99999 },
    { name: '10만원 - 20만원', value: 100000 },
    { name: '20만원 - 30만원', value: 200000 },
    { name: '30만원이상', value: 300000 },
  ];

  //필터팝업변수
  const [activeFilter, setActiveFilter] = useState(0);

  //오른쪽 필터 팝업변수
  const [rightFilter, setRightFilter] = useState(false);

  //선택된 필터가 뭔지 보여줄 변수
  const [filterName, setFilterName] = useState('신상품순');

  //------------------------------------------------------------------------------
  //메서드
  //브랜드 선택 메서드
  const handleBrand = (brand) => {
    const match = allItems.filter((item) => item.brand === brand);
    setItems(match);
  };

  //제조국 선택 메서드
  const handleCountry = (made) => {
    const match = allItems.filter((item) => item.made === made);
    setItems(match);
  };

  //가격 선택 메서드------------------------------------------------------
  const handlePrice = (pi) => {
    const match = allItems.filter((item) => item.price * 0.8 < pi);
    const match2 = allItems.filter(
      (item) => item.price * 0.8 >= pi && item.price * 0.8 < pi + 100000
    );
    const match3 = allItems.filter((item) => item.price * 0.8 > pi);
    if (pi === 99999) {
      setItems(match);
    } else if (pi === 300000) {
      setItems(match3);
    } else {
      setItems(match2);
    }
  };
  //input1 저장메서드
  const rememberP = (e) => {
    setFilterPrice(Number(e.target.value));
    console.log(filterPrice);
  };
  //input2 저장메서드
  const rememberP2 = (e) => {
    setFilterPrice2(Number(e.target.value));
    console.log(filterPrice2);
  };
  //input1이상 input2이하의 제품을 골라내는 메서드
  const checkPrice = () => {
    const priceFinalItem = allItems.filter(
      (i) => filterPrice <= i.price * 0.8 && filterPrice2 >= i.price * 0.8
    );
    setItems(priceFinalItem);
  };
  //-------------------------------------------------------------------가격 끝

  // 가격 낮은순 정렬 메서드
  const sortByPriceAsc = () => {
    const sortedItems = [...items].sort((a, b) => a.price * 0.8 - b.price * 0.8);
    setFilterName('낮은가격순');
    setItems(sortedItems);
  };

  // 가격 높은순 정렬 메서드
  const sortByPriceDesc = () => {
    const sortedItems = [...items].sort((a, b) => b.price * 0.8 - a.price * 0.8);
    setFilterName('높은가격순');
    setItems(sortedItems);
  };

  // 신상품순 정렬 메서드
  const sortByNewest = () => {
    const sortedItems = [...items].sort((a, b) => {
      const dateA = Number(String(a.date).replace(/\./g, ''));
      const dateB = Number(String(b.date).replace(/\./g, ''));
      return dateB - dateA;
    });
    setFilterName('신상품순');
    setItems(sortedItems);
  };

  const sortOptions = [
    { name: '신상품순', handler: sortByNewest },
    { name: '낮은가격순', handler: sortByPriceAsc },
    { name: '높은가격순', handler: sortByPriceDesc },
  ];

  return (
    <div className="product-list-wrap">
      <div>
        <div className="product-filter-top">
          <p className="product-filter-top-l">Filter</p>
          {/* <p>{rightFilte ? sortOptions[0].name}</p> */}
          <p className="product-filter-top-filter" onClick={() => setRightFilter(!rightFilter)}>
            {filterName}
            <div className="product-filter-top-r ">
              <ul className={rightFilter == true ? 'active' : ' '}>
                {sortOptions.map((sortOption, id) => (
                  <li key={id} onClick={sortOption.handler}>
                    {sortOption.name}
                  </li>
                ))}
              </ul>
            </div>
          </p>
        </div>
        <div className="product-filter-bot">
          <ul className="product-filter-bot-t">
            <li className={activeFilter === 0 ? 'active' : ''} onClick={() => setActiveFilter(0)}>
              브랜드
            </li>
            <li className={activeFilter === 1 ? 'active' : ''} onClick={() => setActiveFilter(1)}>
              제조국
            </li>
            <li className={activeFilter === 2 ? 'active' : ''} onClick={() => setActiveFilter(2)}>
              가격
            </li>
          </ul>
          <ul className="product-filter-bot-b">
            <li className="brand-label" style={{ display: activeFilter === 0 ? 'flex' : 'none' }}>
              {itemBrands.map((brand) => (
                <>
                  <label onClick={() => handleBrand(brand)} key={brand}>
                    {brand}
                    <input type="radio" name="brand" />
                  </label>
                </>
              ))}
            </li>
            <li className="country-label" style={{ display: activeFilter === 1 ? 'flex' : 'none' }}>
              {itemMades.map((i) => (
                <>
                  <label onClick={() => handleCountry(i)}>
                    {i}
                    <input type="radio" name="product-detail-country" />
                  </label>
                </>
              ))}
            </li>
            <li className="price-label" style={{ display: activeFilter === 2 ? 'flex' : 'none' }}>
              <div className="price-tag-t">
                {priceRange.map((p) => (
                  <p>
                    <label onClick={() => handlePrice(p.value)}>
                      {p.name}
                      <input type="radio" className="product-detail-price" name="list-price" />
                    </label>
                  </p>
                ))}
              </div>
              <div className="price-tag-b">
                직접입력 <input className='xsmall' type="text" value={filterPrice} onChange={rememberP} />
                -
                <input className='xsmall' type="text" value={filterPrice2} onChange={rememberP2} />
                <button className="btn xsmall outline" type="button" onClick={checkPrice}>
                  적용
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <ul className="sub-goods-list">
        {currentItems.map((item) => (
          <li key={item.code}>
            <Link to={`/product-detail/${item.code}`}>
              <ProductCard sendItem={item} />
            </Link>
          </li>
        ))}
        {/* 상품이 없을 때 */}
        {currentItems.length === 0 && <li className="no-items">해당 브랜드의 상품이 없습니다.</li>}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductListPage;
