import React from 'react'
import ProductCard from '../components/ProductCard';
import { useProductStore } from './store/useProductStore';
import './scss/ProductListPage.scss'

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



