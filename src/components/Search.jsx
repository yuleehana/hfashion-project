import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import "./sass/Search.scss";
import "../pages/sass/ProductListPage.scss"; // ProductListPage 스타일
import ProductCard from "../components/ProductCard"; // ProductCard 컴포넌트 임포트

const Search = () => {
  const { items, onFetchItem } = useProductStore();
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q") || ""; // 검색어 추출
  const navigate = useNavigate();
  const [results, setResults] = useState([]);

  // 상품 불러오기
  useEffect(() => {
    onFetchItem(); // 상품 데이터를 불러옵니다
  }, [onFetchItem]);

  // 검색어 필터링
  useEffect(() => {
    const k = keyword.toLowerCase(); // 검색어 소문자로 변환
    setResults(
      items.filter(
        (item) =>
          item.title?.toLowerCase().includes(k) ||  // 제목에서 검색어 포함 여부 체크
          item.name?.toLowerCase().includes(k) ||   // 이름에서 검색어 포함 여부 체크
          item.brand?.toLowerCase().includes(k)     // 브랜드에서 검색어 포함 여부 체크
      )
    );
  }, [keyword, items]);

  // 할인 퍼센트 계산
  const getDiscountPercent = (original, sale) => {
    if (!original || !sale) return null;
    return Math.round(((original - sale) / original) * 100); // 할인율 계산
  };

  return (
    <div className="sub-main">
      <div className="search-page">
        <h2 className="search-title">"{keyword}" 검색 결과</h2>

        {results.length > 0 ? (  // 결과가 있을 경우
          <div className="product-list-wrap">
            <ul className="sub-goods-list">
              {results.map((item) => {
                // 할인율 계산
                const discount = getDiscountPercent(item.originalPrice, item.salePrice);
                return (
                  // <li key={item.code}>
                  //   <ProductCard sendItem={item} />  {/* ProductCard 컴포넌트로 상품 렌더링 */}
                  // </li>
                  <li key={item.code}>
                    <Link to={`/product-detail/${item.code}`}>
                      <ProductCard sendItem={item} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <p className="no-result">검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
