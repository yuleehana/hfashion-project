import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products';
import './sass/ProductDetail.scss'
import ProductDetailRightInfo from '../components/ProductDetailRightInfo'
import DetailPageSwiper from '../components/DetailPageSwiper';
import DetailSimilarSwiper from '../components/DetailSimilarSwiper';


const ProductDetail = () => {
  const { code } = useParams();
  console.log(code);
  const [product, setProduct] = useState(null);

  // 컴포넌트가 처음 렌더링되거나 code가 변경될 때 상품 찾기
  useEffect(() => {
    if (!code) {
      setProduct(null);
      return;
    }
    // products 배열에서 현재 code와 일치하는 항목을 찾습니다.
    // item.code와 code 모두 문자열 타입이므로 바로 === 비교.
    const findItem = products.find((item) => item.code === code);
    // 5. 업데이트합니다.
    setProduct(findItem || null); // 찾지 못하면 null로 설정하여 오류 방지

  }, [code]); // code가 변경될 때마다 다시 실행
  if (!product) {
    return null; // 또는 로딩 스피너
  }

  return (
    <div className='sub-page'>
      <div className="product-detail-wrap">
        <div className="detail-left">
          <div className="product-detail-slide">
            <DetailPageSwiper product={product} />
          </div>
          <section>
            <h3>이 상품과 비슷한 상품</h3>
            <DetailSimilarSwiper product={product} />
          </section>
          <ul className='tab-ver1'>
            <li className='active'><Link>상품상세정보</Link></li>
            <li><Link>리뷰(100)</Link></li>
            <li><Link>상품Q&A(2)</Link></li>
          </ul>
          <p>'본 상품에 등록되어 있는 정보는 판매자가 직접 등록한 것으로, 등록된 정보에 대한 책임은 판매자에게 있습니다'</p>
          <section>
            <h3>상품고시정보</h3>
            <ul className='product-notice-info'>
              <li><strong>치수</strong><span>실측정보 참조</span></li>
              <li><strong>제조자</strong><span>{product.brand}</span></li>
              <li><strong>제조국</strong><span>{product.made}</span></li>
              <li><strong>세탁방법 및 취급시 주의사항</strong><span>세탁방법 및 취급시 주의사항</span></li>
              <li><strong>제품 주소재</strong><span>본 제품은 석유계 드라이클리닝하십시오.</span></li>
              <li><strong>제조연월</strong><span>{product.date}</span></li>
              <li><strong>품질보증기준</strong><span>관련법 및 소비자분쟁해결 규정에 따름</span></li>
              <li><strong>A/S 책임자,전화번호</strong><span>(주)한섬,18005700</span></li>
            </ul>
          </section>
          <section>
            <h3>실측사이즈</h3>
          </section>
          <section>
            <h3>리뷰 (32)</h3>
          </section>
          <section>
            <h3>상품 Q&A</h3>
          </section>
          <section>
            <h3>배송/교환/반품</h3>
          </section>
        </div>

        <div className="detail-right">
          <ProductDetailRightInfo product={product} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail