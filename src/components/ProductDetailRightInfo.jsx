import { useEffect, useState } from 'react';
import { useProductStore } from '../store/useProductStore'
import './sass/ProductDetailRightInfo.scss'
import { useParams } from 'react-router-dom';

const sizes = ["XS", "S", "M", "L", "XL"]
const colors = ["pink", "sky", "white", "black"]

const ProductDetailRightInfo = ({ product }) => {
  const { code } = useParams();
  // 전역변수 불러오기
  const { items, onFetchItem, onAddToCart } = useProductStore();

  // 상품을 저장할 변수
  const [item, setItem] = useState("");

  // 선택한 사이즈 체크
  const [selectSize, setSelectSize] = useState("");
  // 선택 색상 체크
  const [selectColor, setSelectColor] = useState("");

  // 수량 체크 변수
  const [count, setCount] = useState(1);


  // 새로고침시 다시 렌더링 되면서 초기화
  useEffect(() => {
    if (items.length === 0) {
      onFetchItem();
    }
  }, [])
  // 제품 다시 불러오기
  useEffect(() => {
    if (!code || items.length === 0) return

    const findItem = items.find((it) => it.code === Number(code))
    setItem(findItem);
  }, [code, items])


  // 장바구니 메서드
  const handleAddToCart = () => {
    if (!selectSize) {
      alert("사이즈를 선택해주세요")
      return;
    }

    const productCart = {
      ...item,
      size: selectSize,
      count: count
    }

    onAddToCart(productCart);
  }





  return (
    <>
      <div className="detail-info">
        <div className='item-box'>
          <div className='item-brand-favorite'>
            <p className='brand'>{product.brand}</p>
            <p className='favorite'>
              <span>
                <i>0</i>
                <span><img src="../../images/icon/icon-heart-grey.svg" alt="" /></span>
              </span>
              <span><img src="../../images/icon/icon-share.svg" alt="" /></span>
            </p>
          </div>
          <div className='item-code'>{product.code}</div>
          <div className='item-title'>{product.title}</div>
          <div className='item-price'>
            <strong>{(product.price * 0.8).toLocaleString()}</strong>
            <span>20%</span>
            <del>{(product.price).toLocaleString()}</del>
            <button>쿠폰 다운로드</button>
          </div>
        </div>

        <div className='item-box'>
          {/* <div className='item-color'>
            <button className='pink'></button>
            <button className='sky active'></button>
            <button className='white'></button>
            <button className='black'></button>
          </div> */}

          <div className="item-color">
            {colors.map((color, id) => (
              <button key={id}
                // className={`${color} ${selectColor ? "active" : ""}`}
                // className={selectColor===color ? "active" : ""}
                className={`${color} ${selectColor===color ? "active" : ""}`}
                onClick={() => setSelectColor(color)}>
              </button>
            ))}
          </div>

          <div className='item-size'>
            <p>사이즈 선택 </p>
            {/* <div>
              <button>XS</button>
              <button disabled>S</button>
              <button className='active'>M</button>
              <button>L</button>
              <button>XL</button>
            </div> */}

            <ul>
              {sizes.map((size, id) => (
                <li key={id}>
                  <button className={selectSize === size ? "active" : ""}
                    onClick={() => setSelectSize(size)}>
                    {size}
                  </button>
                </li>
              ))}
            </ul>

          </div>
        </div>

        <div className='item-info'>
          <p>색상:레드, 사이즈:M</p>
          <p className='btn-count'>
            <button className='minus'></button>
            <span>2</span>
            <button className='plus'></button>
          </p>
        </div>

        <div className="item-total">
          <span className="text">합계</span>
          <span className="num">438,000</span>
        </div>

        <div className="cart-btn">
          <button>장바구니</button>
          <button>바로구매</button>
        </div>

        <div className='item-box'>
          <div className="rating">
            <p>★★★★☆</p>
            <p>100 Reviews</p>
          </div>
          <ul className="etc-info">
            <li>
              <strong>배송비</strong>
              <span>30,000 이상 구매시 무료(도서산간추가 3000원)</span>
            </li>
            <li>
              <strong>한섬마일리지</strong>
              <span>최대 1% 적립</span>
            </li>
            <li>
              <strong>H포인트</strong>
              <span>0.1% 적립</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProductDetailRightInfo