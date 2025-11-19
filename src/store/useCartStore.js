import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({

      // 카트에 담을 아이템 배열과 개수
      cartItems: [],
      cartCount: 0,


      // 총 금액
      totalPrice: 0,


      // 카트에 상품 추가 메서드
      onAddToCart: (item) => {
        const cart = get().cartItems;

        // 중복 아이템 체크
        const existing = cart.find((c) => c.code === item.code && c.size === item.size && c.color === item.color);

        let updateCart;
        if (existing) {
          updateCart = cart.filter((c) => c.code === item.code && c.size === item.size && c.color === item.color);
          alert('이미 장바구니에 담긴 상품입니다');

        }
        else {
          updateCart = [...cart, { ...item }];

        }

        // 총 구매 금액
        let total = 0;
        // 총 금액 구하기
        updateCart.forEach((item) => {
          total += item.price * item.count
        })

        set({
          cartItems: updateCart,
          cartCount: updateCart.length,
          totalPrice: total
        })

      },


      // 카트에서 아이템 제거
      onRemoveCart: (code) => {
        const cart = get().cartItems;
        const updateCart = cart.filter((c) => !(c.code === code));

        let total = 0;

        // 총 금액 구하기
        updateCart.forEach((item) => {
          total += item.price * item.count
        })

        set({
          cartItems: updateCart,
          cartCount: updateCart.length,
          totalPrice: total
        });

      },


      // 컬러 선택
      onAddColor: (item) => {
        const color = get().cartItems.color;

        set({
          item: color,
        })

      },


      // 수량 변경
      // onPlusCount: (id) => {
      //   const cart = get().cartItems;
      //   const updateCart = cart.map((item) =>
      //     item.id === id ? { ...item, count: item.count + 1 } : item
      //   );
      //   let total = 0;
      //   updateCart.forEach((item) => {
      //     total += item.price * item.count;
      //   });

      //   set({
      //     cartItems: updateCart,
      //     totalPrice: total,
      //   });
      // },


      resetCart: () => set({ cartItems: [], totalPrice: 0, cartCount: 0 }),



    }),

    { name: 'cart-storage' }

  )
)