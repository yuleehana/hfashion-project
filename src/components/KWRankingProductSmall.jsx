// import React, { useState } from 'react'
// import { useProductStore } from '../store/useProductStore'
// import { Link } from 'react-router-dom';

// const KWRankingProductSmall = () => {
//   const onItemsCategory = useProductStore((state) => state.onItemsCategory);
//   const categoryItems = onItemsCategory
//   .filter(cate => cate.category === 'man outer')
//   .slice(0, 5);


//   const [isHover, setIsHover] = useState(false);

//   const handleMouseOver = () => {
//     setIsHover(true);
//   };
//   const handleMouseOut = () => {
//     setIsHover(false);
//   };

//   return (
//     <>
//       {categoryItems.map((item, id) => ( 
//         <li key={id}
//           className={isHover ? "active" : ''}
//           onMouseOver={handleMouseOver}
//           onMouseOut={handleMouseOut}>
//           {item.thumImg}
//           <Link to={item.code}>{item.title}</Link>
//         </li>
//       ))}

//     </>
//   )
// }

// export default KWRankingProductSmall