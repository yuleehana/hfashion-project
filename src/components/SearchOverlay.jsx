import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./sass/SearchOverlay.scss";
import { useProductStore } from "../store/useProductStore.js";

const popularKeywords = ["가디건", "점퍼", "백팩", "스니커즈", "스커트", "티셔츠", "로퍼", "셔츠", "모자"];

const SearchOverlay = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const store = useProductStore();
  const products = store.items || [];

  const [keyword, setKeyword] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [recentKeywords, setRecentKeywords] = useState([]);

  // 최초 로딩 시 스토어에서 상품 가져오기
  useEffect(() => {
    store.onFetchItem();
  }, []);

  // 실시간 검색 필터링
  useEffect(() => {
    if (keyword.trim() && products.length > 0) {
      const filtered = products
        .filter(item =>
          (item.title || "").toLowerCase().includes(keyword.toLowerCase())
        )
        .slice(0, 12);
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  }, [keyword, products]);

  if (!isOpen) return null;

  const handleInputChange = (e) => setKeyword(e.target.value);
  const handleClear = () => setKeyword("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = keyword.trim();
    if (!trimmed) return;

    addRecentKeyword(trimmed);
    setKeyword("");
    navigate(`/search?q=${trimmed}`);
    onClose();
  };

  // 최근 검색어 최대 10개 + 15자 이상 말줄임(...)
  const addRecentKeyword = (item) => {
    const fullText = typeof item === "string" ? item : item.title || item.name;
    const keywordText = fullText.length > 15 ? fullText.slice(0, 15) + "..." : fullText;

    if (!recentKeywords.includes(keywordText)) {
      setRecentKeywords([keywordText, ...recentKeywords].slice(0, 10));
    }
  };

  // 인기 검색어 클릭
  const handlePopularKeywordClick = (kw) => {
    addRecentKeyword(kw);
    navigate(`/search?q=${kw}`);
    onClose();
  };

  return (
    <div className="search-overlay">
      <button className="close-btn" onClick={onClose}>
        <img src="/images/close-icon-white.svg" alt="닫기" />
      </button>

      <div className="search-input-box">
        <form onSubmit={handleSubmit} className="search-container">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={keyword}
            onChange={handleInputChange}
          />

          {/* 실시간 검색 미리보기 */}
          {keyword && filteredItems.length > 0 && (
            <ul className="search-preview">
              {filteredItems.map(item => (
                <li
                  key={item.id}
                  onClick={() => {
                    addRecentKeyword(item); // item 전체 전달
                     setKeyword(""); // 검색어 초기화
                    navigate(`/product-detail/${item.code}`);
                    onClose();
                  }}
                >
                  {item.title || item.name}
                </li>
              ))}
            </ul>
          )}

          {keyword && (
            <button type="button" className="clear-btn" onClick={handleClear}>
              <img src="/images/close-icon-white.svg" alt="지우기" />
            </button>
          )}

          <button className="search-icon" type="submit">
            <img src="/images/search-icon-white.svg" alt="검색" />
          </button>

          {!keyword && (
            <div className="search-suggestions">
              {/* 최근검색어 */}
              <div className="recent-keywords">
                <div className="recent-keywords-del">
                  <p>최근 검색어</p>
                  <button
                    type="button"
                    className="all-clear-btn"
                    onClick={() => setRecentKeywords([])}
                  >
                    전체삭제
                  </button>
                </div>

                <ul>
                  {recentKeywords.length === 0 ? (
                    <li className="no-recent">최근 검색어가 없습니다.</li>
                  ) : (
                    recentKeywords.map(kw => (
                      <li key={kw}>
                        <button
                          type="button"
                          className="keyword-button"
                          onClick={() => {
                            navigate(`/search?q=${kw}`);
                            onClose();
                          }}
                        >
                          {kw}
                        </button>
                        <button
                          type="button"
                          className="delete-btn"
                          onClick={() =>
                            setRecentKeywords(recentKeywords.filter(r => r !== kw))
                          }
                        >
                          <img src="/images/close-icon-white.svg" alt="삭제" />
                        </button>
                      </li>
                    ))
                  )}
                </ul>
              </div>

              {/* 인기 검색어 */}
              <div className="popular-keywords">
                <p>인기 검색어</p>
                <ul>
                  {popularKeywords.map((kw, i) => (
                    <li key={kw}>
                      <button
                        type="button"
                        className="popular"
                        onClick={() => handlePopularKeywordClick(kw)}
                      >
                        <span className="rank">{i + 1}</span>
                        {kw}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SearchOverlay;
