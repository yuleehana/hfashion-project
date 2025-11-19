import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useProductStore } from '../store/useProductStore';
import ProductCard from '../components/ProductCard';   // 상품카드 불러오기
import './sass/Search.scss';                      // 검색 페이지 전용 스타일

const Search = () => {
  const { items, onFetchItem } = useProductStore();
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('q') || '';
  const navigate = useNavigate();
  const [results, setResults] = useState([]);

  // 상품 목록을 처음에 불러옴
  useEffect(() => {
    onFetchItem();
  }, []);

  // 검색어가 바뀔 때마다 필터링
  useEffect(() => {
    const lowerKeyword = keyword.toLowerCase();
    const filtered = items.filter(
      (item) =>
        item.title?.toLowerCase().includes(lowerKeyword) ||
        item.name?.toLowerCase().includes(lowerKeyword) ||
        item.brand?.toLowerCase().includes(lowerKeyword)  // 브랜드 검색도 포함
    );
    setResults(filtered);
  }, [keyword, items]);

  return (
    <div className="search-page">
      
      {/*검색 타이틀 */}
      <h2 className="search-title">
        "{keyword}" 검색 결과
      </h2>

      {/* 검색 결과 있을 때 */}
      {results.length > 0 ? (
        <div className="search-grid">
          {results.map((item) => (
            <div
              key={item.code}
              className="search-card-wrapper"
              onClick={() => navigate(`/product-detail/${item.code}`)} // 상세페이지 이동
            >
              {/* 기존 ProductCard 사용 */}
              <ProductCard sendItem={item} />
            </div>
          ))}
        </div>
      ) : (
        /* 검색 결과 없을 때 */
        <p className="no-result">검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default Search;
