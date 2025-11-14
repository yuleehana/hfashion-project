import React from 'react';

const DetailImgUrl = ({ product }) => {
  // product가 undefined일 경우 빈 배열로 대체하여 안전하게 렌더링
  const ditailImgUrls = product?.detail || []
  console.log(ditailImgUrls)

  return (
    <section>       
      <ul>
        {ditailImgUrls.map((url, id) => (
          <li key={id}>
            <p>여기{id}</p>
            {url}
            <img src={url} alt='' />
          </li>
        ))}
      </ul>

    </section>
  );
};

export default DetailImgUrl;