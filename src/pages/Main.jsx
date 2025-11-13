import React from 'react'
import MainSwiper from '../components/MainSwiper'

const Main = () => {
    return (
        <div className="inner">
            <div className="main-slider-wrap">
                <MainSwiper />
            </div>

            <div className="main-content">
                <section>
                    <h2>KEYWORD RANKING</h2>
                </section>
                <section>
                    <h2>CATEGORY NEW</h2>
                </section>
                <section>
                    <h2>BRAND LIVE</h2>
                </section>
                <section>
                    <h2>BEST REVIEW</h2>
                </section>
                
            </div>
        </div>
    )
}

export default Main