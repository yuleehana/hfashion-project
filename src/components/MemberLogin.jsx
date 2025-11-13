// import React, { useState } from 'react';
// import './sass/MemberLogin.scss';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuthStore } from '../store/authstore';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth, db } from '../firebase/firebase';
// import { doc, getDoc, setDoc } from 'firebase/firestore';

// const MemberLogin = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const { onGoogleLogin, setUser } = useAuthStore();
//   const navigate = useNavigate();


//   // 메서드
//   const handleGoogleLogin = async (e) => {
//     e.preventDefault();
//     await onGoogleLogin();
//     console.log('구글 로그인 완료');
//     navigate('/');
//   };


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };


//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         formData.email,
//         formData.password
//       );
//       const user = userCredential.user;
//       const userRef = doc(db, 'users', user.uid);
//       const userDoc = await getDoc(userRef);

//       if (userDoc.exists()) {
//         setUser(userDoc.data());
//       } else {
//         const newUser = {
//           uid: user.uid,
//           email: user.email,
//           name: '', // 회원가입 시 입력한 이름이 있다면 여기 넣기
//         };
//         await setDoc(userRef, newUser);
//         setUser(newUser);
//       }
//       alert('로그인 성공');
//       navigate('/');
//     } catch (err) {
//       alert(err.message);
//     }
//   };



//   return (
//     <form className="login-wrap" onSubmit={handleLogin}>
//       <div className="input-wrap">
//         <input
//           type="eamil"
//           name="email"
//           placeholder="아이디 또는 이메일 아이디"
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="비밀번호 입력(8~15자리 영문+숫자+특수문자 조합)"
//           onChange={handleChange}
//         />
//       </div>
//       <div className="idTag">
//         <p className="rememberId">아이디 저장</p>
//         <p className="findIdPw">
//           <span className="findId">
//             <Link>아이디찾기</Link>
//           </span>
//           <span className="findPw">
//             <Link>비밀번호찾기</Link>
//           </span>
//         </p>
//       </div>
//       <div className="button-grid-wrap">
//         <button>로그인하기</button>
//         <button onClick={handleGoogleLogin}>구글 로그인</button>
//         <button>카카오 로그인</button>
//       </div>
//     </form>
//   );
// };

// export default MemberLogin;
