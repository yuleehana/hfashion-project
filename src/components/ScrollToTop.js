import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
    // 현재 Url 위치 정보
    const {pathname}=useLocation();
    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname]);

  return null;
}

export default ScrollToTop