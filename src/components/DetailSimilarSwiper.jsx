import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useProductStore } from '../store/useProductStore'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import 'swiper/css'
import './sass/DetailSimilarSwiper.scss'

const DetailSimilarSwiper = ({ category, product }) => {
    const { onItemsCategory } = useProductStore();
    const currentItems = onItemsCategory(category);
    // 현재 상품과 같은 카테고리이지만 자기 자신은 제외
    const filteredItems = currentItems.filter(item => item.category === product.category);
    console.log(filteredItems)
    return (
        <Swiper
         className="detail-sub-goods-list"
            slidesPerView={4.6}
            spaceBetween={20}
        >
                {filteredItems.map(item => (
                    <SwiperSlide key={item.code}>
                        <Link to={`/product-detail/${item.code}`}>
                            <ProductCard sendItem={item} />
                        </Link>
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}

export default DetailSimilarSwiper