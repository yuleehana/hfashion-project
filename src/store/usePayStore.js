import { create } from "zustand";

export const usePayStore = create(
  (set, get) => ({

    // 날짜
    today: new Date().toLocaleDateString(),





  })
)