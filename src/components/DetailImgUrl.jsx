import React from 'react';
import './sass/DetailImgUrl.scss'
const DetailImgUrl = ({ product }) => {
  // product가 undefined일 경우 빈 배열로 대체하여 안전하게 렌더링
  const ditailImgUrls = product?.detail || []
  console.log(ditailImgUrls)

  return (
    <ul className='detail-img' >
      {ditailImgUrls.map((url, id) => (
        <li key={id}>
          <img src={url} alt={url} />
        </li>
      ))}
    </ul>
  );
};

export default DetailImgUrl;