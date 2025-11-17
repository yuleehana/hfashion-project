import React from 'react'
import { Link } from 'react-router-dom'
import KWRankingProductSmall from './KWRankingProductSmall'

const MainKeyWordRanking = () => {
  return (
    <section className='KWRanking-wrap'>
      <h2>KEYWORD RANKING</h2>
      <div className='main-sec-inner'>
        <div className='sec-inner-left'>
          <ul>
            <li>
              <Link>가디건</Link>
              <KWRankingProductSmall/>
            </li>
            <li>
              <Link>맨투맨</Link>
            </li>
            <li>
              <Link>가방</Link>
            </li>
            <li>
              <Link>스니커즈</Link>
            </li>
            <li>
              <Link>원피스</Link>
            </li>
          </ul>
        </div>

        <div className='sec-inner-right'>

        </div>
      </div>
    </section>
  )
}

export default MainKeyWordRanking