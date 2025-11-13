import React from 'react'
import MainSwiper from '../components/MainSwiper'
import MainKeyWordRanking from '../components/MainKeyWordRanking'
import MainCategoryNew from '../components/MainCategoryNew'
import MainBrandLive from '../components/MainBrandLive'
import MainBestReview from '../components/MainBestReview'
import './sass/Main.scss'

const Main = () => {
    return (
        <div className="inner">
            <div className="main-slider-wrap">
                <MainSwiper />
            </div>
            <div className="main-content">
                <MainKeyWordRanking />
                <MainCategoryNew />
                <MainBrandLive />
                <MainBestReview />
            </div>
        </div>
    )
}

export default Main