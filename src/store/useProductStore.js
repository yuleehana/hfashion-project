import { create } from "zustand";
import { products } from "../data/products.js";

export const useProductStore = create((set, get) => ({

  items: [],


  onFetchItem: () => {
    const allItems = get().items || [];
    if (allItems.length > 0) return;
    console.log("상품불러오기")
    set({ items: products });
  },
  // 상품목록을 저장할 배열
  // items: products,
  // 카트에 담긴 상품
  // 카트에 담긴 상품의 갯수
  // 총금액
  // 검색어를 저장할 변수

  // 2. 메서드
  // 불려진 데이터를 카테고리별로 분리하기
  onItemsCategory: (cate) => {
    const allItems = get().items || [];

    // 1. 카테고리 값(cate)이 없거나 'all'이면 전체 상품 반환
    if (!cate || cate === 'all') {
      return allItems;
    }

    // 2. 필터링 로직 수정: 카테고리 이름에 'cate' 키워드가 포함되어 있는지 확인
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

    // 1. brand가 없거나 'all'이면 전체 상품 반환
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

    // 3. brand가 문자열인 경우: 기존의 단일 브랜드 필터링
    else {
      // item.brand가 brand 문자열과 정확히 일치하는 상품만 필터링
      return allItems.filter((item) => item.brand === brand)
    }
  },




  // 카트에 담긴 상픔 개수
  cartItems: [],
  cartCount: [],

  // 총 금액
  totalPrice: 0,

  onAddToCart: (product) => {
    const cart = get().cartItems;

    const existing = cart.find((item) =>
      item.id === product.id && item.size === product.size
    )
    let updateCart;

    if (existing) {
      updateCart = cart.map((item) =>
        item.id === product.id && item.size === product.size ?
          { ...item, count: item + product.count } : item
      )
    }
    else {
      updateCart = [...cart, { ...product }]
    }

    // 총 구매 금액
    let total = 0;
    updateCart.foreEach((item) => {
      total += item.price * item.count
    })

    set({
      cartItems: updateCart,
      cartCount: updateCart.length,
      totalPrice: total
    })

  },



  onPlusCount: (id) => {
    const cart = get().cartItems;
    const updateCart = cart.map((item) =>
      item.id === id ?
        { ...item, count: item.count + 1 } : item
    )
    let total = 0;
    updateCart.forEach((item) => {
      total += item.price * item.count
    })

    set({
      cartItems: updateCart,
      totalPrice: total
    })


  },


}))