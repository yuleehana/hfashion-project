import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { create } from 'zustand';
import { auth, googleProvider, db } from '../firebase/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const useAuthStore = create((set) => ({
  // 변수

  // 회원가입 변수
  user: null,

  // 아이템 변수
  items: [],
  // 아이템 데이터

  // 회원가입
  onMember: async (name, nickName, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      set({ user: userCredential.user });
      alert('회원가입 성공');
    } catch (err) {
      alert(err.message);
    }
  },

  // 로그인
  onLogin: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      set({ user: userCredential.user });
      alert('로그인 성공!');
    } catch (err) {
      alert(err.message);
    }
  },

  // 구글 로그인
  onGoogleLogin: async () => {
    try {
      // 구글 로그인 팝업 & 데이터 저장
      const result = await signInWithPopup(auth, googleProvider);

      // 성공
      const user = result.user;
      const userRef = doc(db, 'user', user.uid);

      // 데이터 없음
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        const userInfo = {
          email: user.email,
          name: user.displayName,
          uid: user.uid,
          nickname: user.displayName,
        };

        await setDoc(userRef, userInfo);
        set({ user: userInfo });
      }
      // 데이터ㅓ가져오기
      else {
        set({ user: userDoc.data() });
      }
    } catch (err) {
      alert(err.message);
    }
  },

  // 로그아웃하기
  onLogout: async () => {
    await signOut(auth);
    set({ user: null });
  },
}));
