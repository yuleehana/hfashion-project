import React from "react";
import { useNavigate } from "react-router-dom";
import "./sass/Magazine.scss";

//대표이미지 
import img1 from "../assets/magazine/magazine_1.jpg";
import img2 from "../assets/magazine/magazine_2.jpg";
import img3 from "../assets/magazine/magazine_3.jpg";

//제품이미지
// 제품 이미지 (추가적으로 가정)
import p1 from "../assets/magazine/product_shirt.jpg";
import p2 from "../assets/magazine/product_jeans.jpg";
import p3 from "../assets/magazine/product_shoes.jpg";

const Magazine = () => {
  const navigate = useNavigate();

  return (
    <section className="magazine">
      <h2 className="magazine-title">MAGAZINE</h2>
      <div className='container'>
        <div className="magazine-wrap">

          {/* 1. 왼쪽 이미지 영역 (큰 이미지 1개 + 작은 이미지 2개) */}
          <div className="magazine-left">
            <div className="magazine-main-img">
              {/* 왼쪽 메인 이미지 (가장 크게) */}
              <img
                src={img1}
                alt="main_model_left"
              />
            </div>

            <div className="magazine-side-imgs">
              {/* 오른쪽 상단 작은 이미지 */}
              <div className="magazine-side-img-top">
                <img
                  src={img2}
                  alt="sub_model_top"
                />
              </div>
              {/* 오른쪽 하단 작은 이미지 */}
              <div className="magazine-side-img-bottom">
                <img
                  src={img3}
                  alt="sub_model_bottom"
                />
              </div>
            </div>
          </div>

          {/* 2. 오른쪽 텍스트 + 제품 + 하단 문구 영역 */}
          <div className="magazine-right">

            {/* 오른쪽 영역 제목 */}
            <h2 className="magazine-title">(SHIRT)</h2>

            {/* 제품 목록 */}
            <div className="magazine-product-list">
              <div className="product-item">
                <img src={p1} alt="product1_shirt" onClick={() => navigate("/product-detail/T32F7WSH13TWT1XI5")} />
                <p className="product-name">크롭 크레스트 셔츠</p>
              </div>
              <div className="product-item">
                <img src={p2} alt="product2_jeans" onClick={() => navigate("/product-detail/T32F6NEW31TWT11AB")} />
                <p className="product-name">클레어 와이드 핏 데님 팬츠</p>
              </div>
              <div className="product-item">
                <img src={p3} alt="product3_shoes" onClick={() => navigate("/product-detail/T52F6ARSC51JT1YBS")} />
                <p className="product-name">길리안 경량 코트 스니커즈</p>
              </div>
            </div>

            {/* 설명 문구 */}
            <div className="magazine-desc">
              <div className="magazine-desc-left">
                <strong>Easy pick, everyday cute. </strong><br />
                대충 입어도 예쁜 게 포인트. <br />
                스타일링 고민? 이 셔츠로 끝.
              </div>

              {/* 하단 브랜드 문구 */}
              <div className="magazine-desc-right">
                LOVELY<br />Essentials
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Magazine;