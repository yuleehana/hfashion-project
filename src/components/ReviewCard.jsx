import React from 'react'
import "./sass/ReviewCard.scss";

const ReviewCard = () => {
  return (
    <div className='review-card'>
      <div className="img-box">
        <img src={props.thumbImg} alt="thumbImg" />
      </div>

      <div className="review-item-box">
        <div className="item-top">
          <p className="brand-name">{props.brand}</p>
          <p className="review-text">넉넉하게 잘 맞아요~소매가 리뷰에서 듣던 대로 길어요부드럽고 깔끔해서 마음에 들어요</p>
        </div>
        <div className="item-bottom">
          <p className="product-name">{props.title}</p>
          <span>평점</span>
          <div className="stars">
            {[1,2,3,4,5].map((num) => (
              <img key={num} src={num <= ranking.rating ?
                  "/images/icon-star-black.svg" : "/images/icon-star-white.svg"
                } alt="star" className='star-icon' />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard