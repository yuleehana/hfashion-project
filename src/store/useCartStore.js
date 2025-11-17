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
        const existing = cart.find((c) => c.code === item.code)

        let updateCart;
        if (existing) {
          updateCart = cart.filter((c) => c.code !== item.code);
          alert('이미 장바구니에 담긴 상품입니다');
        }
        else {
          updateCart = [...cart, { ...item }];

        }

        set({
          cartItems: updateCart
        });

      },

      // 카트에서 아이템 제거
      onRemoveCart: (code) => {
        const cart = get().cartItems;
        const updateCart = cart.filter((c) => !(c.code === code));

        set({
          cartItems: updateCart
        });
      },

      resetCart: () => set({ cartItems: [] }),

    }),

    { name: 'cart-storage' }

  )
)