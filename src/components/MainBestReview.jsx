import React from 'react'
import "./sass/MainBestReview.scss";
import {products} from "../data/products.js";

function ReviewCard({thumbImg, brand, title, rating}){
  return(
    <>
      <li className='review-box'>
        <div className="img-box">
          <img src={thumbImg} alt="thumbImg" />
        </div>

        <div className='review-item-box'>
          <div className="item-top">
            <p className="brand-name">{brand}</p>
            <p className="review-text"></p>
          </div>
          <div className="item-bottom">
            <p className="product-name">{title}</p>
            <div className="rating-box">
              <span>평점{rating}</span>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

const MainBestReview = () => {
  return (
    <section>
      <h2>BEST REVIEW</h2>
      <div className='container'>
        <div className="review-box-list">
              <div className='review-box'>
                <div className="img-box">
                  <img src="./images/products/POYSU2550534378001/thumbnail.jpg" alt="" />
                </div>

                <div className="review-item-box">
                  <div className="item-top">
                    <p className="brand-name">BOSS</p>
                    <p className='review-text'>리뷰글리뷰글리뷰글</p>
                  </div>
                  <div className="item-bottom">
                    <p className="product-name">스트레치 소프트 치노 스트레이트핏</p>
                    <div className="rating-box">
                      <span>평점</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='review-box'>
                <div className="img-box">
                  <img src="./images/products/POYSU2550534378001/thumbnail.jpg" alt="" />
                </div>

                <div className="review-item-box">
                  <div className="item-top">
                    <p className="brand-name">BOSS</p>
                    <p className='review-text'>리뷰글리뷰글리뷰글</p>
                  </div>
                  <div className="item-bottom">
                    <p className="product-name">스트레치 소프트 치노 스트레이트핏</p>
                    <div className="rating-box">
                      <span>평점</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='review-box'>
                <div className="img-box">
                  <img src="./images/products/POYSU2550534378001/thumbnail.jpg" alt="" />
                </div>

                <div className="review-item-box">
                  <div className="item-top">
                    <p className="brand-name">BOSS</p>
                    <p className='review-text'>리뷰글리뷰글리뷰글</p>
                  </div>
                  <div className="item-bottom">
                    <p className="product-name">스트레치 소프트 치노 스트레이트핏</p>
                    <div className="rating-box">
                      <span>평점</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <ul className="review-box-list">
              {products.map(p => {
                return <ReviewCard thumbImg={p.thumbImg} brand={p.brand} title={p.title} />
              })}
            </ul> */}

                <div className="more-btn-wrap">
                    <button className='more-btn'>리뷰 더보기</button>
                </div>
            </div>
        </section>
    )
}

export default MainBestReview