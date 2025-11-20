import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sass/SearchOverlay.scss";

const popularKeywords = ["가디건", "점퍼", "백팩", "스니커즈", "스커트", "티셔츠", "로퍼", "셔츠", "모자"];

const SearchOverlay = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const [recentKeywords, setRecentKeywords] = useState([]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = keyword.trim();
    if (!trimmed) return;

    const newRecent = [trimmed, ...recentKeywords.filter((r) => r !== trimmed)].slice(0, 9);
    setRecentKeywords(newRecent);

    setKeyword("");

    navigate(`/search?q=${trimmed}`);
    onClose();
  };

  const handleClear = () => setKeyword("");

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
            onChange={(e) => setKeyword(e.target.value)}
          />

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

              {/* 최근 검색어 */}
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
                    recentKeywords.map((kw) => (
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
                            setRecentKeywords(recentKeywords.filter((r) => r !== kw))
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
                        onClick={() => {
                          navigate(`/search?q=${kw}`);
                          onClose();
                        }}
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
