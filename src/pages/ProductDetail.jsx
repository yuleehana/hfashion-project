import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './scss/productDetail.scss'
import { useProductStore } from '../store/useProductStore';
// 사이즈를 저장할 배열
const sizes = ['S', 'M', 'L'];

const ProductDetail = () => {

  // 주소줄에 있는 파라메터 값을  받아서 사용하기
  const { id } = useParams();
  const { items, onFetchItems } = useProductStore();
  // 상품을 저장할 변수
  const [product, setProduct] = useState('');
  // 선택된 사이즈를 체크하기
  const [selectSize, setSelectSize] = useState('');
  // 수량을 체크해줄 변수
  const [count, setCount] = useState(1);

  // 새로 고침을 하면 다시 랜더리 되면서 모든 값이 초기화 된다
  // 그래서 다시 제품을 불러오도록 한다
  useEffect(() => {
    if (items.length === 0) {
      onFetchItems()
    }
  }, [])

  useEffect(() => {
    if (!id || items.length === 0) return
    // 뿌려질 제품 찾기
    const findItem = items.find((item) => item.id === Number(id))
    setProduct(findItem)
  }, [id, items])

  return (
    <div className='sub-page'>
      <div className="content-inner product-wrap">
        <div className="product-img">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-text">
          <p className='cate-titel'>{product.category}</p>
          <p className="product--title">{product.title}</p>
          <p className="product-price">{product.price}</p>
          <div className='product-size'>
            <strong>사이즈</strong>
            <ul>
              {sizes.map((size, id) => (
                <li key={id}>
                  <button className={selectSize === size ? 'active' : ''} onClick={() => setSelectSize(size)}>
                    {size}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* 수량선택 */}
          <div className='product-count'>
            <strong>수량</strong>
            <div className='count-box'>
              <button onClick={() => setCount((c) => Math.max(1, c - 1))}>-</button>
              <span>{count}</span>
              <button onClick={() => setCount((c) => c + 1)}>+</button>
            </div>
          </div>
          {/* 장바구니, 찜버튼 */}
          <div className='cart-btn'>
            <button>찜하기</button>
            <button>장바구니</button>
          </div>
          <p className='desc'></p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail