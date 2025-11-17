// components/Pagination.jsx

import React from 'react';
import './sass/Pagination.scss'; 

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    if (totalPages <= 1) return null;

    // 페이지 그룹 계산 로직 (유지)
    const pageGroupSize = 10; 
    const startPageIndex = Math.floor((currentPage - 1) / pageGroupSize) * pageGroupSize; 
    
    // 페이지 번호 배열 생성
    const pageNumbers = [];
    const startPage = startPageIndex + 1;
    const endPage = Math.min(startPageIndex + pageGroupSize, totalPages);

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }
    
    // totalPages가 10 이하일 때 처음/마지막 버튼만 비활성화하는 조건
    const disableFirstLast = totalPages <= 10;

    return (
        <div className="pagination">
            {/* 1. 처음으로 (<<) : 10페이지 이하일 때 또는 현재 1페이지일 때 비활성화 */}
            <button
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1 || disableFirstLast}
                className="first-last-btn"
            >
                « 처음으로
            </button>
            
            {/* 2. 이전 페이지 (‹) : 10페이지 이하 여부와 상관없이 현재 1페이지일 때만 비활성화 */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="prev-next-btn"
            >
                ‹ 이전
            </button>

            {/* 3. 페이지 번호 목록 (10개 단위로 끊김) */}
            <div className="page-numbers">
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={() => onPageChange(number)}
                        className={currentPage === number ? 'active' : ''}
                    >
                        {number}
                    </button>
                ))}
            </div>

            {/* 4. 다음 페이지 (›) : 10페이지 이하 여부와 상관없이 마지막 페이지일 때만 비활성화 */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages} 
                className="prev-next-btn"
            >
                다음 ›
            </button>

            {/* 5. 마지막으로 (>>) : 10페이지 이하일 때 또는 마지막 페이지일 때 비활성화 */}
            <button
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages || disableFirstLast}
                className="first-last-btn"
            >
                마지막으로 »
            </button>
        </div>
    );
};

export default Pagination;