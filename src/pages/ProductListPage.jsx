import React from 'react'
import { useProductStore } from '../store/useProductStore'
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import './sass/ProductListPage.scss'

const ProductListPage = ({ category }) => {
    const { onItemsCategory } = useProductStore();

    // 카테고리 필터링
    const currentItem = onItemsCategory(category);
    return (
        <div className='product-detail-wrap'>
            {/* 상품 목록 */}
            <ul className="sub-goods-list">
                {currentItem.map((item) => (
                    <li key={item.code}>
                        <Link to={`/product-detail/${item.code}`}>
                            <ProductCard sendItem={item} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductListPage



