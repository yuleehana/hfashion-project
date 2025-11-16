import { create } from 'zustand';

export const usePickStore = create((set, get) => ({
  // 찜 데이터를 담을배열
  pickLists: [],

  // 찜리스트에 넣을 메서드
  onAddWishList: (item) => {
    const pick = get().pickLists;

    //중복아이템체크
    const exisiting = pick.find((p) => p.code == item.code);

    let updatePick;
    if (exisiting) {
      alert('이미 찜목록에 있는 항목입니다!');
      return;
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
}));
