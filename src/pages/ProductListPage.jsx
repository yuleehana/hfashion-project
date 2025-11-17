import React from 'react';
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
    
    // 2. 커스텀 훅 호출! 모든 페이지네이션 로직이 캡슐화됨
    const { 
        currentItems, 
        currentPage, 
        totalPages, 
        handlePageChange 
    } = usePagination(allItems, 10); // (전체 목록, 페이지당 개수) 전달

    return (
        <div className='product-list-wrap'>
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
    );
};

export default ProductListPage;