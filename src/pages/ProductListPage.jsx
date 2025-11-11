import React from 'react'
import { useProductStore } from '../store/useProductStore'
import ProductCard from '../components/ProductCard';
import './sass/ProductListPage.scss'

const ProductListPage = ({ category }) => {
    const { onItemsCategory } = useProductStore();

    // 카테고리 필터링
    const currentItem = onItemsCategory(category);

    return (
        <div className='content-inner'>
            {/* 상품 목록 */}
            <ul className="sub-goods-list">
                {currentItem.map((item) => (
                    <li key={item.code}>
                        <ProductCard sendItem={item} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductListPage



