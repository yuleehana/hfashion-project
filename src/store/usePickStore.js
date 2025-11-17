import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const usePickStore = create(
  persist(
    (set, get) => ({
      // 찜 데이터를 담을배열
      pickLists: [],

      // 찜리스트에 넣을 메서드
      onAddWishList: (item) => {
        const pick = get().pickLists;

        //중복아이템체크
        const exisiting = pick.find((p) => p.code == item.code);

        let updatePick;
        if (exisiting) {
          updatePick = pick.filter((p) => p.code !== item.code);
          alert('찜목록에서 제거되었습니다.');
        } else {
          updatePick = [...pick, { ...item }];
          alert('찜목록에 추가되었습니다!');
        }
        set({
          pickLists: updatePick,
        });
      },

      // 찜목록에서 데이터 제거
      onRemoveList: (code) => {
        const pick = get().pickLists;
        const updatePick = pick.filter((p) => !(p.code === code));
        set({
          pickLists: updatePick,
        });
      },

      // 찜버튼 클릭상태 확인
      isActive: null,
      setIsActive: (item) => set({ setIsActive: item }),

      // 로그아웃,전체삭제 찜리스트 리셋메서드
      resetPcikList: () => set({ pickLists: [] }),
    }),

    //localStorage 저장키
    { name: 'pick-storage' }
  )
);
