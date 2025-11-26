import React, { useRef } from 'react'
import "./sass/MainBestReview.scss";
import { useProductStore } from '../store/useProductStore.js';
import ReviewCard from './ReviewCard.jsx';


const MainBestReview = () => {
  const { items } = useProductStore();

  const targetCategories = ["cateman pants", "catewomen skirt", "sundries man etc"];

  const filtered = items.filter((p) =>
    targetCategories.includes(p.category) && p.rating === 5
  );

  const result = targetCategories
    .map((cat) => filtered.find((p) => p.category === cat)) // 해당 카테고리에서 첫번째 상품만
    .filter(Boolean) // null 제거
    .slice(0, 3);

  const scrollRef = useRef(null);
  const isDownRef = useRef(false);
  const startRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e) => {
    const el = scrollRef.current;
    if(!el) return;
    el.classList.add("is-dragging"); // css에서 커서 모양 바꾸기용
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  }

  const handleMouseLeave = () => {
    const el = scrollRef.current;
    if(!el) return;
    isDownRef.current = false;
    el.classList.remove("is-dragging");
  }

  const handleMouseUp = () => {
    const el = scrollRef.current;
    if (!el) return;
    isDownRef.current = false;
    el.classList.remove("is-dragging");
  }

  const handleMouseMove = (e) => {
    const el = scrollRef.current;
    if(!el || !isDownRef.current) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = x
  }
  
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