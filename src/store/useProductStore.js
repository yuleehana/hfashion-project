import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { products } from '../data/products.js';

export const useProductStore = create(
  // loacalStorage에 넣는 명령어
  persist(
    (set, get) => ({
      items: [],

      onFetchItem: () => {
        const allItems = get().items || [];

        // * items 배열이 비어있는 경우에만 products 데이터를 set 함
        // * persist가 데이터를 로드하기 전에 호출되든, 로드 후 호출되든,
        // * 데이터가 없으면 products로 채워지도록 확실하게 보장
        // if (allItems.length === 0) {
        set({ items: products });
        // }
      },

      // 메서드
      // 불려진 데이터를 카테고리별로 분리하기
      onItemsCategory: (cate) => {
        const allItems = get().items || [];

        // 카테고리 값(cate)이 없거나 'all'이면 전체 상품 반환
        if (!cate || cate === 'all') {
          return allItems;
        }
        // 필터링 로직 수정: 카테고리 이름에 'cate' 키워드가 포함되어 있는지 확인
        else {
          const lowerCaseCate = cate.toLowerCase(); // 검색 키워드 소문자 처리

          return allItems.filter((item) => {
            // item.category (상품 카테고리)를 소문자로 변환 후,
            // lowerCaseCate (전달받은 키워드)가 포함되어 있는지 확인
            return item.category.toLowerCase().includes(lowerCaseCate);
          });
        }
      },

      onItemsBrand: (brand) => {
        const allItems = get().items || [];

        // brand가 없거나 'all'이면 전체 상품 반환
        if (!brand || brand === 'all') {
          return allItems;
        }

        // 2. brand가 배열인 경우: 여러 브랜드 필터링
        else if (Array.isArray(brand)) {
          // 배열에 포함된 모든 브랜드에 해당하는 상품을 필터링하여 반환
          return allItems.filter((item) => {
            // item.brand가 brand 배열에 포함되어 있는지 확인
            // 안전하게 item.brand가 유효한 문자열일 때만 확인합니다.
            if (item.brand && typeof item.brand === 'string') {
              return brand.includes(item.brand);
            }
            return false;
          });
        }
        // brand가 문자열인 경우: 기존의 단일 브랜드 필터링
        else {
          // item.brand가 brand 문자열과 정확히 일치하는 상품만 필터링
          return allItems.filter((item) => item.brand === brand);
        }
      },

      // 메서드: 특정 카테고리, 평점, 슬라이싱 조건을 적용
      onFetchRatedItems: (cate, rating = 5, start = 10, count = 5) => {
        // 해당 카테고리의 전체 상품을 가져옴
        const allItems = get().onItemsCategory(cate);
        // 평점(rating)이 일치하는 상품만 필터링
        const ratedItems = allItems.filter((item) => item.rating === rating);
        // 필터링된 상품 목록에서 10번째(인덱스 9)부터 5개(10번째부터 5개)를 슬라이스합니다.
        const startIndex = start > 0 ? start - 1 : 0;
        const endIndex = startIndex + count;
        return ratedItems.slice(startIndex, endIndex);
      },
    }),
    //로컬스토리지에 저장할 방이름
    {
      name: 'product-storage', // 새로고침용
    }
  )
);
