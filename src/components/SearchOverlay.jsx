import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductStore } from '../store/useProductStore';
import './sass/SearchOverlay.scss';

// 인기 검색어
const popularKeywords = ["가디건", "점퍼", "백팩", "스니커즈", "스커트", "티셔츠", "로퍼", "셔츠", "모자"];

const SearchOverlay = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { items, onFetchItem } = useProductStore();

  // ---------------- Hook 최상위에서 선언 ----------------
  const [keyword, setKeyword] = useState(''); // 입력한 검색어
  const [filteredItems, setFilteredItems] = useState([]); // 실시간 검색 결과
  const [recentKeywords, setRecentKeywords] = useState([]); // 최근 검색어 저장
  // -----------------------------------------------------

  // 상품 데이터 불러오기
  useEffect(() => {
    onFetchItem();
  }, [onFetchItem]);

  // 검색어 변경 시 필터링
  useEffect(() => {
    if (!keyword.trim()) {
      setFilteredItems([]);
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

  // 검색 제출 시 최근 검색어 저장
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedKeyword = keyword.trim();
    if (trimmedKeyword) {
      const newRecent = [trimmedKeyword, ...recentKeywords.filter(k => k !== trimmedKeyword)].slice(0, 5);
      setRecentKeywords(newRecent);
      navigate(`/search?q=${trimmedKeyword}`);
      onClose();
    }
  };

  // 검색어 초기화
  const handleClear = () => setKeyword('');

  if (!isOpen) return null;

  return (
    <div className="search-overlay">
      {/* 오버레이 닫기 버튼 */}
      <button className="close-btn" onClick={onClose}>
        <img src="images/close-icon-white.svg" alt="닫기" />
      </button>

      <div className="search-input-box">
        <form onSubmit={handleSubmit} className="search-container">
          {/* 검색 입력 */}
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          {/* 입력어 초기화 버튼 */}
          {keyword && (
            <button type="button" className="clear-btn" onClick={handleClear}>
              <img src="/images/close-icon-white.svg" alt="닫기" />
            </button>
          )}

          {/* 검색 제출 버튼 */}
          <button className="search-icon" type="submit">
            <img src="/images/search-icon-white.svg" alt="검색" />
          </button>

          {/* 검색어 입력 없을 때: 최근 검색어 + 인기 검색어 */}
          {!keyword && (
            <div className="search-suggestions">
              {/* 최근 검색어 */}
              <div className="recent-keywords">
                <p>최근 검색어</p>
                <ul>
                  {recentKeywords.map((kw) => (
                    <li key={kw}>
                      <button
                        type="button"
                        className="keyword-button"
                        onClick={() => setKeyword(kw)}
                      >
                        {kw}
                      </button>
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() =>
                          setRecentKeywords(recentKeywords.filter((r) => r !== kw))
                        }
                      >
                        <img src="/images/close-icon-white.svg" alt="삭제" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 인기 검색어 */}
              <div className="popular-keywords">
                <p>인기 검색어</p>
                <ul>
                  {popularKeywords.map((kw, index) => (
                    <li key={kw}>
                      <button
                        type="button"
                        className="popular"
                        onClick={() => setKeyword(kw)}
                      >
                        <span className="rank">{index + 1}</span>
                        {kw}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 검색어 입력 시 실시간 필터링 결과 */}
          {keyword && filteredItems.length > 0 && (
            <ul className="search-preview">
              {filteredItems.slice(0, 12).map((item) => ( // slice(0, 12) 검색되는 갯수
                <li key={item.id} onClick={() => {
                  navigate(`/product-detail/${item.code}`); //해당되는 상품 상세페이지로 이동하기
                  onClose(); // 검색 오버레이 닫기
                }}
                  style={{ cursor: 'pointer' }} // 마우스 커서 표시
                >{item.title || item.name}</li>
              ))}
            </ul>
          )}

          {/* 검색어 입력 시 결과 없음 */}
          {keyword && filteredItems.length === 0 && (
            <p className="no-result">검색 결과가 없습니다.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SearchOverlay;
