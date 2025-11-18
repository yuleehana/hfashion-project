import { useEffect, useState } from 'react';
import { useProductStore } from '../store/useProductStore';
import './sass/ProductDetailRightInfo.scss';
import { Link, useParams } from 'react-router-dom';
import { usePickStore } from '../store/usePickStore';
import './sass/button-normal.scss';
import CartPopup from './CartPopup';
import { useCartStore } from '../store/useCartStore';

const sizes = ['XS', 'S', 'M', 'L', 'XL'];
const colors = ['pink', 'sky', 'white', 'black'];

const ProductDetailRightInfo = ({ product }) => {
  const { code } = useParams();
  // 전역변수 불러오기
  const { items, onFetchItem } = useProductStore();
  const { onAddWishList } = usePickStore();
  const { onAddToCart } = useCartStore();

  // 상품을 저장할 변수
  const [item, setItem] = useState('');

  // 선택한 사이즈 체크
  const [selectSize, setSelectSize] = useState('');
  // 선택 색상 체크
  const [selectColor, setSelectColor] = useState('');

  // 수량 체크 변수
  const [count, setCount] = useState(1);

  // 팝업창을 보이고 숨길 변수
  const [showPopup, setShowPopup] = useState(false);


  // 새로고침시 다시 렌더링 되면서 초기화
  useEffect(() => {
    if (items.length === 0) {
      onFetchItem();
    }
  }, []);
  // 제품 다시 불러오기
  useEffect(() => {
    if (!code || items.length === 0) return;

    const findItem = items.find((it) => it.code === code);
    setItem(findItem);
  }, [code, items]);

  // 장바구니 메서드
  const handleAddToCart = () => {
    if (!selectSize) {
      alert('사이즈를 선택해주세요');
      return;
    }

    const productCart = {
      ...item,
      size: selectSize,
      count: count,
    };

    onAddToCart(productCart);
  };

  // 팝업 닫기
  const handleClosePopup = () => {
    // 장바구니 팝업
    setShowPopup(false);
  }

  // 찜리스트 메서드
  const handleAddToPick = () => {
    onAddWishList(item);
  };

  return (
    <>
      <div className="detail-info">
        <div className="item-box">
          <div className="item-brand-favorite">
            <p className="brand">{product.brand}</p>
            <p className="favorite">
              <span>
                <i>0</i>
                <span onClick={handleAddToPick}>
                  <img src="../../images/icon/icon-heart-grey.svg" alt="" />
                </span>
              </span>
            </p>
          </div>

          <div className="item-code">{product.code}</div>
          <div className="item-title">{product.title}</div>
          <div className="item-price">
            <strong>{(product.price * 0.8).toLocaleString()}원</strong>
            <del>{product.price.toLocaleString()}</del>
            <span>20%</span>
            <button>쿠폰 다운로드</button>
          </div>
        </div>

        <div className="item-box">
          <div className="item-color">
            {colors.map((color, id) => (
              <button
                key={id}
                className={`${color} ${selectColor === color ? 'active' : ''}`}
                onClick={() => setSelectColor(color)}
              ></button>
            ))}
          </div>

          <div className="item-size">
            <p>사이즈 선택 </p>
            <ul>
              {sizes.map((size, id) => (
                <li key={id}>
                  <button
                    className={selectSize === size ? 'active' : ''}
                    onClick={() => setSelectSize(size)}
                  >
                    {size}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="item-info">
          <p>색상:레드, 사이즈:M</p>

          {/* 수량 선택 */}
          <p className="btn-count">
            <button className="minus" onClick={() => setCount((c) => Math.max(1, c - 1))}></button>
            <span>{count}</span>
            <button className="plus" onClick={() => setCount((c) => c + 1)}></button>
          </p>
        </div>

        <div className="item-total">
          <span className="text">합계</span>
          <span className="num">{(product.price * 0.8 * `${count}`).toLocaleString()}</span>
        </div>

        <div className="cart-btn">
          <Link className="btn middle primary" onClick={handleAddToCart}>
            장바구니
          </Link>
          <Link className="btn middle secondary" to="/pay">
            바로구매
          </Link>
        </div>

        <div className="item-box">
          <div className="rating">
            <p>
              {
                // product.rating 개수만큼 렌더링
                Array.from({ length: product.rating }, (_, index) => (
                  <img key={index} src="/images/icon-star-black.svg" alt="star-filled" />
                ))
              }
              {
                Array.from({ length: 5 - product.rating }, (_, index) => (
                  <img key={product.rating + index} src="/images/icon-star-white.svg" alt="star-empty" />
                ))
              }
            </p>
            <p>57 Reviews</p>
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

      {/* 팝업 보여주기 */}
      {showPopup ? <CartPopup onClose={handleClosePopup} /> : ""}

    </>
  );
};

export default ProductDetailRightInfo;
