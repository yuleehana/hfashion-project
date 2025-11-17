import React from 'react';
import UserInfoLeftMenu from '../components/UserInfoLeftMenu';
import { usePickStore } from '../store/usePickStore';
import { Link, useNavigate } from 'react-router-dom';

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

        <div className="user-info-right">
          <button onClick={resetPcikList}>전체 삭제</button>
          {pickLists.map((p) => (
            <ul onClick={() => handleMoveDetail(p.code)}>
              <li>
                <div>
                  <img src={p.thumbImg} alt="" />
                </div>
                <div>
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
  );
};

export default Picklist;
