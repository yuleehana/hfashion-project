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
    if (!cate || cate === 'all') { return allItems; }
    else {
      return allItems.filter((item) => item.category === cate)
    }
  },
  onItemsBrand: (brand) => {
    const allItems = get().items || [];
    if (!brand || brand === 'all') { return allItems; }
    else {
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