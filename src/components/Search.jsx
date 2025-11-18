import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProductStore } from '../store/useProductStore';

const Search = () => {
  const { items, onFetchItem } = useProductStore();
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('q') || '';
  const [results, setResults] = useState([]);

  // 상품 목록을 처음에 불러옴
  useEffect(() => {
    onFetchItem();
  }, []);

  // 검색어가 바뀔 때마다 필터링
  useEffect(() => {
    const lowerKeyword = keyword.toLowerCase();
    const filtered = items.filter(
      (item) =>
        item.title?.toLowerCase().includes(lowerKeyword) ||
        item.name?.toLowerCase().includes(lowerKeyword)
    );
    setResults(filtered);
  }, [keyword, items]);

  return (
    <div>
      <h2>🔍 "{keyword}" 검색 결과</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((item) => (
            <li key={item.id}>{item.title || item.name}</li>
          ))}
        </ul>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default Search;
