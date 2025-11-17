import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import './sass/ProductDetail.scss';
import ProductDetailRightInfo from '../components/ProductDetailRightInfo';
import DetailPageSwiper from '../components/DetailPageSwiper';
import DetailSimilarSwiper from '../components/DetailSimilarSwiper';
import DetailImgUrl from '../components/DetailImgUrl';
import MdComment from '../components/MdComment';
import ProdctActualSize from '../components/ProdctActualSize';
import ProductNoticeInfo from '../components/ProductNoticeInfo';
import Tab from '../components/Tab';
import Delivery from '../components/Delivery';
import DetailPageReview from '../components/DetailPageReview';
import ProdctQNA from '../components/ProdctQNA';


const ProductDetail = () => {
  const { code } = useParams();
  console.log(code);
  const [product, setProduct] = useState(null);

  // 탭 상태와 핸들러
  const [activeTab, setActiveTab] = useState('detail');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // 컴포넌트가 처음 렌더링되거나 code가 변경될 때 상품 찾기
  useEffect(() => {
    if (!code) {
      setProduct(null);
      return;
    }
    // products 배열에서 현재 code와 일치하는 항목을 찾기
    // item.code와 code 모두 문자열 타입이므로 바로 === 비교
    const findItem = products.find((item) => item.code === code);
    // 업데이트
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
          <Tab
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          />
          {activeTab === 'detail' && (
            <section>
              <MdComment />
              <DetailImgUrl product={product} />
              <ProductNoticeInfo product={product} />
              <ProdctActualSize />
            </section>
          )}
          {activeTab === 'review' && (
            <DetailPageReview />
          )}
          {activeTab === 'qna' && (
            <section>
              <ProdctQNA />
              <Delivery />
            </section>
          )}

        </div>
        <div className="detail-right">
          <ProductDetailRightInfo product={product} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail