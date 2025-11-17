import React from 'react';
import UserInfoLeftMenu from '../components/UserInfoLeftMenu';
import { usePickStore } from '../store/usePickStore';
import { Link, useNavigate } from 'react-router-dom';
import './sass/picklist.scss';

const Picklist = () => {
  const navigte = useNavigate();
  const { pickLists, onRemoveList, resetPcikList } = usePickStore();
  const handleMoveDetail = (code) => {
    navigte(`/product-detail/${code}`);
  };

  return (
    <div className="sub-page">
      <div className="channel-wrap">
        <div className="channel"></div>
      </div>
      <div className="content-inner">
        <div className="user-info-left">
          <UserInfoLeftMenu />
        </div>

        <div className="user-info-right user-pick-wrap">
          <div className="user-info-right-inner">
            <div className="user-info-right-title">
              <p className="user-info-right-icon-box">
                <span className="pick-icon">하트</span>
              </p>
              <p className="user-info-right-text-box">
                <strong>찜 리스트</strong>
                <span>전체 {pickLists.length}</span>
              </p>
            </div>
            <hr />
            <div>
              {pickLists.map((p) => (
                <ul className="user-picklist-card" onClick={() => handleMoveDetail(p.code)}>
                  <li>
                    <div className="user-picklist-card-img">
                      <img src={p.thumbImg} alt="" />
                    </div>
                    <div className="user-picklist-card-text">
                      <p>{p.brand}</p>
                      <p>{p.title}</p>
                      <p>{p.price}</p>
                    </div>
                  </li>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveList(p.code);
                    }}
                  >
                    삭제
                  </button>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picklist;
