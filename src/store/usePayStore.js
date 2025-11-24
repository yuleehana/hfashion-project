import { create } from "zustand";

export const usePayStore = create((set, get) => ({
  // 날짜
  today: new Date().toLocaleDateString(),

  // 결제수단을 저장할 변수
  receiverInfo: {
    displayName: "",
    phone: "",
    address: "",
    address2: "",
    request: "",
  },

  setReceiverInfo: (info) => set({ receiverInfo: info }),
}));
