import React, { useEffect, useMemo } from 'react';
import { useProductStore } from '../store/useProductStore';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import './sass/ProductListPage.scss';
import Pagination from '../components/Pagination';
import usePagination from '../hooks/usePagination';

const BrandListPage = ({ brand }) => {
  const { onItemsBrand, onFetchItem } = useProductStore();

  /** 최초 로딩 시 상품 불러오기 */
  useEffect(() => {
    onFetchItem();
  }, [onFetchItem]);

  /** 전체 상품 목록 가져오기 (메모이제이션) */
  const allItems = useMemo(() => {
    // currentBrandItem 대신 allItems로 이름을 변경하여 usePagination의 items 인자와 일관성을 유지
    return onItemsBrand(brand);
  }, [brand, onItemsBrand]);

  const {
    currentItems,
    currentPage,
    totalPages,
    handlePageChange
  } = usePagination(allItems, 40, brand);

  return (
    <div className='sub-page'>
      <div className="product-list-wrap">
        <ul className="sub-goods-list">
          {currentItems.map((item) => (
            <li key={item.code}>
              <Link to={`/product-detail/${item.code}`}>
                <ProductCard sendItem={item} />
              </Link>
            </li>
          ))}
          {/* 상품이 없을 때 */}
          {currentItems.length === 0 && (
            <li className="no-items">해당 브랜드의 상품이 없습니다.</li>
          )}
        </ul>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BrandListPage;