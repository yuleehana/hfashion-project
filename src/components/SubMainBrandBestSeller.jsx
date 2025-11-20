import React, { useEffect, useMemo } from 'react';
import { useProductStore } from '../store/useProductStore';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const SubMainBrandBestSeller = ({ brand }) => {
  const { items, onFetchItem } = useProductStore();

  // 최초 로딩 시 상품 불러오기
  useEffect(() => {
    if (items.length === 0) {
      onFetchItem();
    }
  }, [items.length, onFetchItem]);

  const bestSellerItems = useMemo(() => {
    if (items.length === 0) return [];

    let filtered = items;

    // brand가 배열이면 여러 브랜드, 문자열이면 한 브랜드
    if (Array.isArray(brand)) {
      filtered = filtered.filter((item) => brand.includes(item.brand));
    } else if (typeof brand === 'string') {
      filtered = filtered.filter((item) => item.brand === brand);
    }

    // 평점 5점만
    filtered = filtered.filter((item) => item.rating === 5);

    // 최대 5개까지만
    return filtered.slice(7, 12);
  }, [items, brand]);

  return (
    <ul className="sub-goods-list">
      {bestSellerItems.length > 0 ? (
        bestSellerItems.map((item, idx) => (
          <li key={item.code}>
            <Link to={`/product-detail/${item.code}`}>
              <ProductCard
                sendItem={item}
                isBestSeller={true}
                rank={idx + 1}
              />
            </Link>
          </li>
        ))
      ) : (
        <p>평점 5점인 상품이 없습니다.</p>
      )}
    </ul>
  );
};

export default SubMainBrandBestSeller;
