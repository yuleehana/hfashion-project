import React from 'react'
import ProductCard from '../components/ProductCard';
import { useProductStore } from '../store/useProductStore';
import { Link } from 'react-router-dom';
import './sass/ProductListPage.scss'

const BrandListPage = ({ brand }) => {
    const { onItemsBrand } = useProductStore();

    // 브랜드 필터링
    const currentBrandItem = onItemsBrand(brand);
    return (
        <div className='product-detail-wrap'>
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



