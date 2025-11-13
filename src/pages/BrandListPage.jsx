import React from 'react'
import ProductCard from '../components/ProductCard';
import './sass/ProductListPage.scss'
import { useProductStore } from '../store/useProductStore';
import { Link } from 'react-router-dom';

const BrandListPage = ({ brand }) => {
    const { onItemsBrand } = useProductStore();

    // 카테고리 필터링
    const currentBrandItem = onItemsBrand(brand);
    return (
        <div className='content-inner'>
            {/* 상품 목록 */}
            <ul className="sub-goods-list">
                {currentBrandItem.map((item) => (
                    <li key={item.brand}>
                        <Link to={`/product-detail/${item.code}`}>
                            <ProductCard sendItem={item} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BrandListPage



