import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products';
import './sass/ProductDetail.scss'
import ProductDetailRightInfo from '../components/ProductDetailRightInfo'

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
      <div className="content-inner  product-detail-wrap">
        <div className="detail-left">
          <div className="product-detail-slide">
            <img src={product.slide[1]} alt="" />
          </div>
          <div className="">이 상품과 비슷한 상품</div>
          <div className="">
            <div>상품상세정보 탭</div>
            <p>'본 상품에 등록되어 있는 정보는 판매자가 직접 등록한 것으로, 등록된 정보에 대한 책임은 판매자에게 있습니다'</p>
            <h3>상품고시정보</h3>
            <h3>실측사이즈</h3>
            <h3>리뷰 (32)</h3>
            <h3>상품 Q&A</h3>
            <h3>배송/교환/반품</h3>
          </div>
        </div>

        <div className="detail-right">
          <ProductDetailRightInfo product={product}  />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail