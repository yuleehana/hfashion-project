import React, { useState } from 'react';
import RankingItem from './RankingItem';
import { Link, useNavigate } from 'react-router-dom';
import "./sass/MainKeyWordRanking.scss";

const MainKeyWordRanking = () => {
  const [liMenu, setLiMenu] = useState(0);
  const navigate = useNavigate();

  const menuRankProduct = [
    {id:1, title:"아우터", rightMainData:[
        {
          img:"/images/products/POYWI2450499551001/thumbnail.jpg",
          brand:"BOSS",
          title:"후드 패딩 파카 릴렉스핏"
        }
      ], rank:[
        {
          id: 1,
          img: '/images/products/POYFA2550543492001/thumbnail.jpg',
          brand: 'BOSS',
          title:"디태처블 라이너 패디드 봄버 자켓"
        }, {
          id: 2,
          img: '/images/products/POYFA2550543240202/thumbnail.jpg',
          brand: 'BOSS',
          title:"클래식 양가죽 블루종 자켓"
        }, {
          id: 3,
          img: '/images/products/POYFA2550543388404/thumbnail.jpg',
          brand: 'BOSS',
          title:"후드 사파리 점퍼 오버핏"
        }, {
          id: 4,
          img: '/images/products/POYSP2550530270001/thumbnail.jpg',
          brand: 'BOSS',
          title:"양가죽 봄버 자켓 릴랙스핏"
        }
    ]},
    {id:2, title:"펜츠", rightMainData:[
        {
          img:"/images/products/T32F6NEW19TWT11BY/thumbnail.jpg",
          brand:"TOMMY JEANS",
          title:"미아 루즈 핏 데님 팬츠"
        }
      ], rank:[
        {
          id: 1,
          img: "/images/products/T32F7NEW45TWT11BK/thumbnail.jpg",
          brand: "TOMMY JEANS",
          title:"클레어 와이드 핏 턴업 데님 팬츠"
        }, {
          id: 2,
          img: "/images/products/T12F6NPC010MT11BC/thumbnail.jpg",
          brand: "TOMMY HILFIGER MEN",
          title:"덴톤 스트레이트 인디고 데님 팬츠"
        }, {
          id: 3,
          img: "/images/products/T32F7WPC16TWT1C1G/thumbnail.jpg",
          brand: "TOMMY JEANS",
          title:"스크립트 워시드 스웨트 팬츠"
        }, {
          id: 4,
          img: '/images/products/T22F7WPC080WT1ADZ/thumbnail.jpg',
          brand: 'TOMMY HILFIGER WOMEN',
          title:"니트 와이드 팬츠"
        }
    ]},
    {id:3, title:"가방", rightMainData:[
        {
          img:"/images/products/P4W4D3202GUB1/thumbnail.jpg",
          brand:"Calvin Klein Accessories",
          title:"남성 엠보스드 엠블럼 라운드 백팩"
        }
      ], rank:[
        {
          id: 1,
          img: '/images/products/P4W4D3116GUB1/thumbnail.jpg',
          brand: 'Calvin Klein Accessories',
          title:"남성 볼드 로고 나일론 슬링백"
        }, {
          id: 2,
          img: '/images/products/P4W4D3155GUB1/thumbnail.jpg',
          brand: 'Calvin Klein Accessories',
          title:"남성 레이스드 로고 라운드 백팩"
        }, {
          id: 3,
          img: '/images/products/POYSP2550535706001/thumbnail.jpg',
          brand: 'HUGO',
          title:"스퀘어 벨트 백"
        }, {
          id: 4,
          img: '/images/products/Q7H0401DC/thumbnail.jpg',
          brand: 'Magforce',
          title:"아델리 펭귄 웨이스트백 - 데저트 카모"
        }
    ]},
    {id:4, title:"신발", rightMainData:[
        {
          img:"/images/products/P4WYM0134401W/thumbnail.jpg",
          brand:"Calvin Klein Accessories",
          title:"남성 미네르바 청키 레더 레이스업 컵솔 스니커즈"
        }
      ], rank:[
        {
          id: 1,
          img: '/images/products/POYFA2450522833005/thumbnail.jpg',
          brand: 'BOSS',
          title:"Aiden 에이든 로우탑 스니커즈"
        }, {
          id: 2,
          img: '/images/products/POYSP2550536504001/thumbnail.jpg',
          brand: 'BOSS',
          title:"Kieran 키에란 소가죽 로우탑 스니커즈"
        }, {
          id: 3,
          img: '/images/products/T52F7ARS130JT1YBI/thumbnail.jpg',
          brand: 'TOMMY SHOES',
          title:"아카이브 98 웜라인 스니커즈"
        }, {
          id: 4,
          img: '/images/products/T52F7ARS130JT1YBI/thumbnail.jpg',
          brand: 'TOMMY SHOES',
          title:"아카이브 98 웜라인 스니커즈"
        }
    ]},
    {id:5, title:"스커트", rightMainData:[
        {
          img:"/images/products/T22F7WSC050WT1C1G/thumbnail.jpg",
          brand:"TOMMY HILFIGER WOMEN",
          title:"분또 테일러드 미디 스커트"
        }
      ], rank:[
        {
          id: 1,
          img: '/images/products/T22F7WSC505WL1N56/thumbnail.jpg',
          brand: 'TOMMY HILFIGER WOMEN',
          title:"윈터 롱 스커트"
        }, {
          id: 2,
          img: '/images/products/T22F7WSC080WT1MR8/thumbnail.jpg',
          brand: 'TOMMY HILFIGER WOMEN',
          title: "코듀로이 미니 스커트"
        }, {
          id: 3,
          img: '/images/products/T22F7WSC060WT1BDS/thumbnail.jpg',
          brand: 'TOMMY HILFIGER WOMEN',
          title: "울 플리츠 미니 스커트"
        }, {
          id: 4,
          img: '/images/products/T22F7WSC061WT10OG/thumbnail.jpg',
          brand: 'TOMMY HILFIGER WOMEN',
          title: "체크 패턴 미니 스커트"
        }
    ]}
  ]

  const handleHover = (index) => {
    if (liMenu === index) return; // 같은 메뉴 누르면 그대로 유지
    setLiMenu(index);

    // const menuname = menuRankProduct[index].link;
    // if (menuname) navigate(menuname);
  }

  return (
    <section className="KWR-wrap">
      <div className="main-sec-inner">
        <div className="sec-inner-left">
          <h2 className="section-title">KEYWORD<br />RANKING</h2>

          <div className="ranking-item-wrap">
            {menuRankProduct.map((item,index) => (
              <div key={index} className='ranking-item'>
                <button type="button"
                  onMouseEnter={() => handleHover(index)}
                >
                  <span>{item.id}</span>{item.title}
                </button>
                {liMenu === index && (
                  <ul>
                    {item.rank.map((it,id) => (
                      <li key={id} style={{backgroundImage:`url(${it.img})`}}>
                        <Link to={it.id}>
                          <p className='brand-title'>{it.brand}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {liMenu !== null && (
          <div className='sec-inner-right'>
            <div className="kwr-main-img"
              style={{
                backgroundImage: `url(${menuRankProduct[liMenu].rightMainData[0].img})`
              }}>
              <div className="kwr-main-text">
                <p className="brand">
                  {menuRankProduct[liMenu].rightMainData[0].brand}
                </p>
                <p className="title">
                  {menuRankProduct[liMenu].rightMainData[0].title}
                </p>
              </div>
            </div>

            <div className="kwr-sub-img-wrap">
              <div className="showing-khsn">
                <div className="top-item">
                  <p>제목글</p>
                  <p>옷장의 계절을 바꿀 타이밍</p>
                </div>
                <button>더보기</button>
              </div>
              {menuRankProduct[liMenu].rank.slice(0,3).map((it) => (
                <div className='kwr-sub-img'
                  key={it.id} style={{backgroundImage:`url(${it.img})`}}
                >
                  <div className='kwr-sub-text'>
                    <p className="brand">{it.brand}</p>
                    <p className="title">{it.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainKeyWordRanking;
