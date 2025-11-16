import React from 'react';
import UserInfoLeftMenu from '../components/UserInfoLeftMenu';
import { usePickStore } from '../store/usePickStore';
import { useNavigate } from 'react-router-dom';

const Picklist = () => {
  const navigte = useNavigate();
  const { pickLists } = usePickStore();
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
          {pickLists.map((p) => (
            <ul onClick={() => handleMoveDetail(p.code)}>
              <li>
                <img src={p.thumbImg} alt="" />
              </li>
              <li>{p.brand}</li>
              <li>{p.title}</li>
              <li>{p.price}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Picklist;
