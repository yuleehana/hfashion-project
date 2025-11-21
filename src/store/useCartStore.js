import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      totalPrice: 0,
      checkedTotalPrice: 0,

      // 장바구니에 상품 추가
      onAddToCart: (item) => {
        const cart = get().cartItems;

        const exists = cart.find(
          (c) => c.code === item.code && c.size === item.size && c.color === item.color
        );

        if (exists) {
          alert('이미 장바구니에 담긴 상품입니다.');
          return;
        }

        const newCart = [...cart, { ...item, checked: true }];
        const total = newCart.reduce((acc, i) => acc + i.price * i.count, 0);
        const checkedTotal = newCart
          .filter((i) => i.checked)
          .reduce((acc, i) => acc + i.price * i.count, 0);

        set({
          cartItems: newCart,
          totalPrice: total,
          checkedTotalPrice: checkedTotal,
        });
      },

      // 삭제
      onRemoveCart: (code, size, color) => {
        const newCart = get().cartItems.filter(
          (c) => !(c.code === code && c.size === size && c.color === color)
        );

        const total = newCart.reduce((acc, i) => acc + i.price * i.count, 0);
        const checkedTotal = newCart
          .filter((i) => i.checked)
          .reduce((acc, i) => acc + i.price * i.count, 0);

        set({
          cartItems: newCart,
          totalPrice: total,
          checkedTotalPrice: checkedTotal,
        });
      },

      // 체크 토글
      onCheckCart: (code) => {
        const newCart = get().cartItems.map((item) =>
          item.code === code ? { ...item, checked: !item.checked } : item
        );

        const total = newCart.reduce((acc, i) => acc + i.price * i.count, 0);
        const checkedTotal = newCart
          .filter((i) => i.checked)
          .reduce((acc, i) => acc + i.price * i.count, 0);

        set({
          cartItems: newCart,
          totalPrice: total,
          checkedTotalPrice: checkedTotal,
        });
      },

      // 옵션 변경
      updateCartOptions: (code, size, color, count) => {
        const newCart = get().cartItems.map((item) =>
          item.code === code ? { ...item, size, color, count } : item
        );

        const total = newCart.reduce((acc, i) => acc + i.price * i.count, 0);
        const checkedTotal = newCart
          .filter((i) => i.checked)
          .reduce((acc, i) => acc + i.price * i.count, 0);

        set({
          cartItems: newCart,
          totalPrice: total,
          checkedTotalPrice: checkedTotal,
        });
      },

      // 수량 증가
      onPlusCount: (code, size, color) => {
        const newCart = get().cartItems.map((item) =>
          item.code === code && item.size === size && item.color === color
            ? { ...item, count: item.count + 1 }
            : item
        );

        const total = newCart.reduce((acc, i) => acc + i.price * i.count, 0);
        const checkedTotal = newCart
          .filter((i) => i.checked)
          .reduce((acc, i) => acc + i.price * i.count, 0);

        set({
          cartItems: newCart,
          totalPrice: total,
          checkedTotalPrice: checkedTotal,
        });
      },

      // 수량 감소
      onMinusCount: (code, size, color) => {
        const newCart = get().cartItems.map((item) =>
          item.code === code && item.size === size && item.color === color
            ? { ...item, count: Math.max(1, item.count - 1) }
            : item
        );

        const total = newCart.reduce((acc, i) => acc + i.price * i.count, 0);
        const checkedTotal = newCart
          .filter((i) => i.checked)
          .reduce((acc, i) => acc + i.price * i.count, 0);

        set({
          cartItems: newCart,
          totalPrice: total,
          checkedTotalPrice: checkedTotal,
        });
      },

      // 초기화
      resetCart: () => set({ cartItems: [], totalPrice: 0, checkedTotalPrice: 0 }),
    }),
    { name: 'cart-storage' }
  )
);
