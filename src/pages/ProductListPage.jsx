import React, { useState } from 'react';
import { useProductStore } from '../store/useProductStore';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import './sass/ProductListPage.scss';
import Pagination from '../components/Pagination'; // Pagination 컴포넌트 필요
import usePagination from '../hooks/usePagination'; // 커스텀 훅 임포트

const ProductListPage = ({ category }) => {
  const { onItemsCategory } = useProductStore();

  // 1. 전체 목록을 가져옴
  const allItems = onItemsCategory(category);
  //필터된 애들을 담을변수
  const [items, setItems] = useState(allItems);

  // 2. 커스텀 훅 호출! 모든 페이지네이션 로직이 캡슐화됨
  const { currentItems, currentPage, totalPages, handlePageChange } = usePagination(items, 10);
  // (전체 목록, 페이지당 개수) 전달

  //allitems에서 브랜드추출
  const itemBrands = allItems
    .map((item) => item.brand)
    .filter((brand, index, self) => self.indexOf(brand) === index);

  //제조국 추출
  const itemMades = allItems.map((item) => item.made).filter((m, id, all) => all.indexOf(m) === id);

  // 가격관련 btn생성 배열
  const priceRange = [
    { name: '10만원 이하', value: 100000 },
    { name: '10만원 - 20만원', value: 200000 },
    { name: '20만원 - 30만원', value: 300000 },
    { name: '30만원이상', value: 300000 },
  ];

  //------------------------------------------------------------------------------
  //메서드 브랜드 선택 메서드
  const handleBrand = (brand) => {
    const match = allItems.filter((item) => item.brand === brand);
    setItems(match);
  };

  const handleCountry = (made) => {
    const match = allItems.filter((item) => item.made === made);
    setItems(match);
  };

  const handlePrice = (price) => {
    const match = allItems.filter((item) => item.price < price.value);
    setItems(match);
  };

  //제조국 선택 메서드
  return (
    <div className="product-list-wrap">
      <div>
        <ul style={{ display: 'flex', flexDirection: 'row' }}>
          {itemBrands.map((brand) => (
            <li
              onClick={() => handleBrand(brand)}
              style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }}
              key={brand}
            >
              {brand}
            </li>
          ))}
        </ul>
        <ul style={{ display: 'flex', flexDirection: 'row' }}>
          {itemMades.map((i) => (
            <li
              onClick={() => handleCountry(i)}
              style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }}
            >
              {i}
            </li>
          ))}
        </ul>
        <ul>
          {priceRange.map((p) => (
            <li
              onClick={() => handlePrice(p.price)}
              style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }}
            >
              {p.name}
            </li>
          ))}
        </ul>
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
