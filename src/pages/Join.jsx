import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Join = () => {

    const navigate = useNavigate();

    // 변수
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        nickName: '',
        passwordCheck: '',
        phone: '',
        address: ''
    })


    // 메서드
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('회원가입을 성공적으로 완료했습니다')

        navigate('/login')
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value })
    }


    return (
        <div className='sub-page'>
            <div className='login-wrap'>
                <h2 className='section-title'>회원가입</h2>
                <p>H.Point 통합회원 회원가입</p>

                <form onSubmit={handleSubmit}>
                    <input type='text' name='name'
                        value={null}
                        placeholder='이름을 입력해주세요'
                        onChange={handleChange} />
                    <input type='text' name='nickName'
                        value={null}
                        placeholder='아이디를 입력하세요'
                        onChange={handleChange} />
                    <input type='email' name='email'
                        value={null}
                        placeholder='이메일을 입력해주세요'
                        onChange={handleChange} />
                    <input type='password' name='password'
                        value={null}
                        placeholder='비밀번호를 입력해주세요'
                        onChange={handleChange} />
                    <button type='submit'>회원가입</button>
                </form>

                <p>이미 계정이 있으신가요?<Link to='/login'>로그인하기</Link></p>
            </div>
        </div>
    )
}

export default Join