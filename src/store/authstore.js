import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { create } from 'zustand';
import { auth, googleProvider, db } from '../firebase/firebase';
import { addDoc, collection, doc, Firestore, getDoc, setDoc } from 'firebase/firestore';

export const useAuthStore = create((set) => ({
  // 변수

  // 회원가입 변수
  user: null,

  // 아이템 변수
  items: [],
  // 아이템 데이터

  // 회원가입
  // firebase에 유저정보 보내는 메서드
  // zustanduser에 데이터 정보 저장까지 같이
  onMember: async ({ id, displayName, email, password, phone, address, address2 }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName });

      await setDoc(doc(db, 'users', user.uid), {
        id,
        displayName,
        email,
        phone,
        address,
        address2,
      });

      set({
        user: { id, displayName, email, phone, address, address2 },
      });
      alert('회원가입 성공');
    } catch (err) {
      alert(err.message);
    }
  },

  //비회원 상품리스트
  nonCart: {
    items: [],
    totalPrice: 0,
  },

  setNoncart: (data) =>
    set({
      nonCart: {
        items: data.items || [],
        totalPrice: data.totalPrice || 0,
      },
    }),

  clearNonCart: () =>
    set({
      nonCart: { items: [], totalPrice: 0 },
    }),

  //비회원 주문자 변수
  nuser: null,

  onNMember: async ({ oname, ophone, oemail, opassword, opasswordcheck }) => {
    try {
      //비회원정보를 firestore에 저장
      await setDoc(doc(db, 'nuser', ophone), {
        oname,
        ophone,
        oemail,
        opassword,
        opasswordcheck,
      });
      set({
        nuser: { oname, ophone, oemail, opassword, opasswordcheck },
      });

      console.log('nuser데이터정보', {
        oname,
        ophone,
        oemail,
        opassword,
        opasswordcheck,
      });
    } catch (err) {
      alert(err.message);
    }
  },

  naddress: null,
  onNAddress: async ({ nname, nphone, naddress, naddress2, nrequest }) => {
    try {
      await setDoc(doc(db, 'naddress', nname), {
        nname,
        nphone,
        naddress,
        naddress2,
        nrequest,
      });
      set({
        naddress: { nname, nphone, naddress, naddress2, nrequest },
      });

      console.log('nuser주소정보', {
        nname,
        nphone,
        naddress,
        naddress2,
        nrequest,
      });
    } catch (err) {
      alert(err.message);
    }
  },

  // 로그인
  onLogin: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const fbUser = userCredential.user;

      const userRef = doc(db, 'users', fbUser.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        set({
          user: {
            uid: fbUser.uid,
            ...userDoc.data(),
          },
        });
      }

      // set({ user: userCredential.user });
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
      const userRef = doc(db, 'users', user.uid);

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
      // 데이터가져오기
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

  initAuth: () => {
    //firebase Auth에서 제공하는 이벤트리스너
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          set({ user: userDoc.data() });
        } else {
          set({ user: { uid: user.uid, email: user.email, displayName: user.displayName } });
        }
      } else {
        set({ user: null });
      }
    });
  },
}));
