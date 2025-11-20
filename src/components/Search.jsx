import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import "./sass/Search.scss";
import "../pages/sass/ProductListPage.scss"; // ProductListPage 스타일

const Search = () => {
  const { items, onFetchItem } = useProductStore();
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q") || "";
  const navigate = useNavigate();
  const [results, setResults] = useState([]);

  // 상품 불러오기
  useEffect(() => {
    onFetchItem();
  }, [onFetchItem]);

  // 검색어 필터링
  useEffect(() => {
    const k = keyword.toLowerCase();
    setResults(
      items.filter(
        (item) =>
          item.title?.toLowerCase().includes(k) ||
          item.name?.toLowerCase().includes(k) ||
          item.brand?.toLowerCase().includes(k)
      )
    );
  }, [keyword, items]);

  // 할인 퍼센트 계산
  const getDiscountPercent = (original, sale) => {
    if (!original || !sale) return null;
    return Math.round(((original - sale) / original) * 100);
  };

  return (
    <div className="sub-main">
      <div className="search-page">
        <h2 className="search-title">"{keyword}" 검색 결과</h2>

        {results.length > 0 ? (
          <div className="product-list-wrap">
            <ul className="sub-goods-list">
              {results.map((item) => {
                const discount = getDiscountPercent(item.originalPrice, item.salePrice);
                return (
                  <li key={item.code}>
                    <a onClick={() => navigate(`/product-detail/${item.code}`)}>
                      <div className="img-box">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="text-box">
                        <p className="brand">{item.brand}</p>
                        <p className="title"><strong>{item.title}</strong></p>
                        <div className="price">
                          <span className="sale">{item.salePrice}원</span>
                          {item.originalPrice && <del>{item.originalPrice}원</del>}
                          {discount > 0 && <span className="sale-percent">{discount}%</span>}
                        </div>
                      </div>
                    </a>
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