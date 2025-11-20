import React from 'react'
import "./sass/MainBestReview.scss";
import "./sass/ReviewCard.scss";
import { useProductStore } from '../store/useProductStore.js';
import ReviewCard from './ReviewCard.jsx';


const MainBestReview = () => {
  const { items } = useProductStore();
  const top3 = [...items].filter((p) => p.rating === 5).slice(0, 3);
  console.log(top3);
  
  return (
    <section>
      <h2>BEST REVIEW</h2>
      <div className='container'>
        <div className="review-box-list">
          <ul className="review-box-list">
            {top3.map((p) => (
              <li key={p.code}>
                <ReviewCard item={p} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MainBestReview