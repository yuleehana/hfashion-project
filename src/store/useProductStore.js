import { create } from "zustand";
import { products } from "../data/products.js";

export const useProductStore = create(() => ({
    // 1. 상태변수
    user: null,
    // 상품목록을 저장할 배열
    // items: products,
    // 카트에 담긴 상품
    // 카트에 담긴 상품의 갯수
    // 총금액
    // 검색어를 저장할 변수


    // 2. 메서드

    // 불려진 데이터를 카테고리별로 분리하기
    onItemsCategory: (cate) => {
        const allItems = products;
        // console.log(allItems);
        if (!cate || cate === 'all') { return allItems; }
        else {
            return allItems.filter((item) => item.category === cate)
        }
    },
    onItemsBrand: (brand) => {
        const allItems = products;
        // console.log(allItems);
        if (!brand || brand === 'all') { return allItems; }
        else {
            return allItems.filter((item) => item.brand === brand)
        }
    },

    // 3.  화면에 뿌려질
}))