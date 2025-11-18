import React, { useState } from 'react';
import RankingItem from './RankingItem';
import { Link, useNavigate } from 'react-router-dom';
import "./sass/MainKeyWordRanking.scss";

const rightMainData = [
  {
    id: 1,
    img: '/images/products/T32F7WSH13TWT1MAS/thumbnail.jpg',
    brand: 'TOMMY JEANS',
    originprice: 139000,
    dis: '15%',
  },
];

const rightSubData = [
  [
    {
      id: 1,
      img: '/images/products/T32F6WSH02TWT10P4/thumbnail.jpg',
      brand: 'TOMMY JEANS',
      title: '마이크로 깅엄 체크 셔츠',
      originprice: 129000,
      dis: '15%',
    },
    {
      id: 2,
      img: '/images/products/T32F6WSH10TWL11BZ/thumbnail.jpg',
      brand: 'TOMMY JEANS',
      title: '데님 크롭 셔켓',
      originprice: 169000,
      dis: '15%',
    },
    {
      id: 3,
      img: '/images/products/T32F7NEF41TWT11AB/thumbnail.jpg',
      brand: 'TOMMY JEANS',
      title: '벨라 플레어 핏 데님 팬츠',
      originprice: 239000,
      dis: '15%',
    },
  ],
];

const MainKeyWordRanking = () => {
  const [liMenu, setLiMenu] = useState(null);
  const navigate = useNavigate();

  const menuRankProduct = [
    {title:"아우터", rank:[
      {
        id: 1,
        img: '/images/products/POYFA2550543492001/thumbnail.jpg',
        brand: 'BOSS',
      }, {
        id: 2,
        img: '/images/products/POYFA2550543240202/thumbnail.jpg',
        brand: 'BOSS',
      }, {
        id: 3,
        img: '/images/products/POYFA2550543388404/thumbnail.jpg',
        brand: 'BOSS',
      }, {
        id: 4,
        img: '/images/products/POYSP2550530270001/thumbnail.jpg',
        brand: 'BOSS',
      }
    ]},
    {title:"펜츠", rank:[
      {
        id: 1,
        img: "/images/products/T32F7NEW45TWT11BK/thumbnail.jpg",
        brand: "TOMMY JEANS"
      }, {
        id: 2,
        img: "/images/products/T12F6NPC010MT11BC/thumbnail.jpg",
        brand: "TOMMY HILFIGER MEN"
      }, {
        id: 3,
        img: "/images/products/T32F7WPC16TWT1C1G/thumbnail.jpg",
        brand: "TOMMY JEANS"
      }, {
        id: 4,
        img: '/images/products/T22F7WPC080WT1ADZ/thumbnail.jpg',
        brand: 'TOMMY HILFIGER WOMEN'
      }
    ]},
    {title:"가방", rank:[
      {
        id: 1,
        img: '/images/products/P4W4D3116GUB1/detail/detail_1.jpg',
        brand: 'Calvin Klein Accessories',
      }, {
        id: 2,
        img: '/images/products/P8ZHP3A3A01/thumbnail.jpg',
        brand: 'GUESS',
      }, {
        id: 3,
        img: '/images/products/QO04314553/thumbnail.jpg',
        brand: 'Vivienne Westwood',
      }, {
        id: 4,
        img: '/images/products/QO04320705/thumbnail.jpg',
        brand: 'Burberry',
      }
    ]},
    {title:"신발", rank:[
      {
        id: 1,
        img: '/images/products/POYFA2450522833005/thumbnail.jpg',
        brand: 'BOSS',
      }, {
        id: 2,
        img: '/images/products/POYSP2550536504001/thumbnail.jpg',
        brand: 'BOSS',
      }, {
        id: 3,
        img: '/images/products/T52F7ARS130JT1YBI/thumbnail.jpg',
        brand: 'TOMMY SHOES',
      }, {
        id: 4,
        img: '/images/products/T52F7ARS130JT1YBI/thumbnail.jpg',
        brand: 'TOMMY SHOES',
      }
    ]},
    {title:"스커트", rank:[
      {
        id: 1,
        img: '/images/products/T22F7WSC505WL1N56/thumbnail.jpg',
        brand: 'TOMMY HILFIGER WOMEN',
      }, {
        id: 2,
        img: '/images/products/T22F7WSC080WT1MR8/thumbnail.jpg',
        brand: 'TOMMY HILFIGER WOMEN',
      }, {
        id: 3,
        img: '/images/products/T22F7WSC060WT1BDS/thumbnail.jpg',
        brand: 'TOMMY HILFIGER WOMEN',
      }, {
        id: 4,
        img: '/images/products/T22F7WSC061WT10OG/thumbnail.jpg',
        brand: 'TOMMY HILFIGER WOMEN',
      }
    ]}
  ]

  const handleToggle = (index) => {
    setLiMenu(liMenu === index ? null : index);
    const menuname = menuRankProduct[index].link;
    if (menuname) navigate(menuname);
  }

  return (
    <section className="KWR-wrap">
      <div className="main-sec-inner">
        <div className="sec-inner-left">
          <h2 className="section-title">KEYWORD<br />RANKING</h2>

          <div className="ranking-item-wrap">
            {/* <div className="ranking-item">
              <Link>아우터</Link>
              <div className="ranking-img-box">
                <ul>
                  {outerData.map((outer) => (
                    <li key={outer.id}>
                      <Link>
                        <img src={outer.img} alt={outer.id} />
                        <p>{outer.brand}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
            {menuRankProduct.map((item,index) => (
              <div key={index} className='ranking-item'>
                <button onClick={() => handleToggle(index)}>{item.title}</button>
                {liMenu === index && (
                  <ul>
                    {item.rank.map((it,id) => (
                      <li key={id}>
                        <Link to={it.id}>
                          <img src={it.img} alt="" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        

        <div className="sec-inner-right">
          <div className="KWR-main-img"></div>
          <div className="KWR-sub-img"></div>
        </div>
      </div>
    </section>
  );
};

export default MainKeyWordRanking;
