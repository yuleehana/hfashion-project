import React from 'react'
import "./sass/NonMember.scss";

const NonMember = () => {
    return (
        <div className='sub-page'>
            <h2 className='sub-page-title'>비회원 주문결제</h2>
            <div className='inner nonmember-wrap'>
                <div className="sub-inner-left">
                    <div className="sub-inner-left-bottom">
                        <div className="sub-inner-sec1">
                            <div className="sub-order-inf">
                                <p>주문자 정보</p>
                                <hr />
                                <form>
                                    <div className="order-inf-name">
                                        <p>주문자</p>
                                        <input type="text" name='name' placeholder='이름을 입력해주세요.' />
                                    </div>
                                    <div className='order-inf-phone'>
                                        <p>연락처</p>
                                        <input type="tel" name="phone" placeholder='전화번호를 입력해주세요.' />
                                    </div>
                                    <div className="order-inf-email">
                                        <p>이메일</p>
                                        <input type="email" name="email" placeholder='이메일을 입력해주세요.' />
                                    </div>
                                    <div className="order-inf-password">
                                        <p>주문비밀번호</p>
                                        <input type="password" name='password' placeholder='비밀번호를 입력해주세요.' />
                                    </div>
                                    <div className="order-inf-passCheck">
                                        <p>비밀번호 확인</p>
                                        <input type="password" name='passwordCheck' placeholder='비밀번호 확인' />
                                    </div>
                                </form>
                            </div>
                            <div className="sub-address-inf">
                                <p>배송지 정보</p>
                                <hr />
                                <form>
                                    <div className='add-inf-name'>
                                        <p>이름</p>
                                        <input type="text" name='name' placeholder='이름을 입력해주세요.' />
                                    </div>
                                    <div className='add-inf-phone'>
                                        <p>연락처</p>
                                        <input type="tel" name="phone" placeholder='전화번호를 입력해주세요.' />
                                    </div>
                                    <div className='add-inf-address'>
                                        <p>주소</p>
                                        <div className="add-inf-inner">
                                            <div className="add-inf-inner-top">
                                                <input type="text" name="address" />
                                                <button>주소검색</button>
                                            </div>
                                            <input type="text" name="address" />
                                        </div>

                                    </div>
                                    <div className='add-inf-request'>
                                        <p>요청사항</p>
                                        <input type="text" placeholder='배송시 요청사항을 선택해주세요.' />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="sub-inner-sec2">
                            <div className="order-item">
                                {/* 주문 상품 컴포넌트 */}
                                <p>주문 상품 컴포넌트</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-inner-right">
                    {/* 주문서 컴포넌트 만들기 */}
                    <p>주문서 컴포넌트</p>
                </div>
            </div>
        </div>
    )
}

export default NonMember