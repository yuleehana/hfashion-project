import React from 'react'
import "./sass/MainBestReview.scss";
import { useProductStore } from '../store/useProductStore.js';
import ReviewCard from './ReviewCard.jsx';


const MainBestReview = () => {
  const { items } = useProductStore();
  // const top3 = [...items].filter((p) => p.rating === 5).slice(0, 3);

  //1. 내가 BEST REVIEW에 넣고 싶은 카테고리 지정
  // const bestItems = items.filter((p) => p.rating === 5);
  const targetCategories = ["cateman pants", "catewomen skirt", "sundries man etc"];

  //2. 그 카테고리에서 rating = 5인 상품만 지정하기
  // const categoryMap = new Map();
  const filtered = items.filter((p) =>
    targetCategories.includes(p.category) && p.rating === 5
  );

  // bestItems.forEach((p) => {
  //   if(!categoryMap.has(p.category)){
  //     categoryMap.set(p.category, p);
  //   }
  // })

  //3. 지정된 카테고리마다 1개씩만 선택 (순서는 targetCategories 순서대로)
  // const top3 = Array.from(categoryMap.values()).slice(0, 3);

  // console.log(top3);
  const result = targetCategories
    .map((cat) => filtered.find((p) => p.category === cat)) // 해당 카테고리에서 첫번째 상품만
    .filter(Boolean) // null 제거
    .slice(0, 3);
  
  return (
    <section>
      <h2>BEST REVIEW</h2>
      <div className='container'>
        <div className="review-box-list">
          <ul className="review-box-list">
            {result.map((p) => {
              const thumbImgOnlyItem = {
                ...p, detail: [], slide: []
              };

              return(
                <li key={p.code}>
                  <ReviewCard item={thumbImgOnlyItem} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MainBestReview