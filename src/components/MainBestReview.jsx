import React from 'react'
import "./sass/MainBestReview.scss";
import { products } from "../data/products.js";
import { useProductStore } from '../store/useProductStore.js';

function ReviewCard({ ranking }) {
  console.log(ranking)

  return (
    <>
      <li className='review-box'>
        <div className="img-box">
          <img src={ranking.thumbImg} alt="thumbImg" />
        </div>

        <div className='review-item-box'>
          <div className="item-top">
            <p className="brand-name">{ranking.brand}</p>
            <p className="review-text">넉넉하게 잘 맞아요~소매가 리뷰에서 듣던 대로 길어요부드럽고 깔끔해서 마음에 들어요</p>
          </div>
          <div className="item-bottom">
            <p className="product-name">{ranking.title}</p>
            <div className="rating-box">
              <span>평점</span>
              <div className="stars">
                {[1,2,3,4,5].map((num) => (
                  <img key={num} src={num <= ranking.rating ?
                    "/images/icon-star-black.svg" : "/images/icon-star-white.svg"
                    }
                    alt="star" className='star-icon' />
                ))}
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

const MainBestReview = () => {
  const { items } = useProductStore();
  const top3 = [...items].filter((p) => p.rating === 5).slice(0, 3)
  console.log(top3)

  return (
    <section>
      <h2>BEST REVIEW</h2>
      <div className='container'>
        <div className="review-box-list">
          <ul className="review-box-list">
            {top3.map(p => {
              return <ReviewCard ranking={p} />
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MainBestReview