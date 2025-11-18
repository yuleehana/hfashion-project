import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductStore } from '../store/useProductStore';
import './sass/SearchOverlay.scss';

// 인기 검색어
const popularKeywords = ["가디건", "점퍼", "백팩", "스니커즈", "스커트", "티셔츠", "로퍼", "셔츠", "모자"];

const SearchOverlay = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { items, onFetchItem } = useProductStore();

  const [keyword, setKeyword] = useState(''); // 입력한 검색어
  const [filteredItems, setFilteredItems] = useState([]); //실시간 필터링 결과

  // 처음에 상품 데이터 불러오기
  useEffect(() => {
    onFetchItem();
  }, []);

  // 검색어가 바뀔 때마다 필터링
  useEffect(() => {
    if (!keyword.trim()) {
      setFilteredItems([]); // 입력 없을 때는 결과 비움
      return;
    }

    const lower = keyword.toLowerCase();
    const result = items.filter(
      (item) =>
        item.title?.toLowerCase().includes(lower) ||
        item.name?.toLowerCase().includes(lower)
    );
    setFilteredItems(result);
  }, [keyword, items]);

  // 오버레이 꺼져 있으면 렌더링 안함
  if (!isOpen) return null;

  // 엔터로 검색 제출 시 /search?q=키워드 로 이동
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${keyword}`);
    onClose(); // 오버레이 닫기
  };

  return (
    <div className="search-overlay">
      {/* 닫기 버튼 */}
      <button className="close-btn" onClick={onClose}><img src="images/close-icon-white.svg" alt="" /></button>

      {/* 검색 입력폼 */}
      <form onSubmit={handleSubmit} className="search-container">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="search-icon" type="submit"><img src="/images/search-icon-white.svg" alt="" /></button>

        {/* 입력 없을 때 인기 검색어 노출 */}
        {!keyword && (
          <div className="popular-keywords">
            <p>인기 검색어</p>
            <ul>
              {popularKeywords.map((kw,index) => (
                <li key={kw}>
                  <button onClick={() => setKeyword(kw)}>
                    <span className="rank">{index + 1}</span>{kw}</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 실시간 검색 미리보기 */}
        {keyword && (
          <ul className="search-preview">
            {filteredItems.map((item) => (
              <li key={item.id}>{item.title || item.name}</li>
            ))}
          </ul>
        )}
        {/* 검색 결과 없을 때 */}
        {keyword && filteredItems.length === 0 && (
          <p className="no-result">검색 결과가 없습니다.</p>
        )}
      </form>
    </div>
  );
};

export default SearchOverlay;
