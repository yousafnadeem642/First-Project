// import React from "react";

// const Card = ({ cardInfo }) => {
  // const { title, description,img} = cardInfo;

//   return (
//     <div className="   p-5 " style={{background:"#f1f1f1",height:"430px"}}>

//       {/* Icon */}
//       <div className=" mb-4">
//          <img src={img} alt="" />
//       </div>

//       {/* Title */}
//       <h2 className=" mb-3">
//         {title}
//       </h2>

//       {/* Description */}
//       <p className="">
//         {description}
//       </p>

//       {/* Button */}
  
   
  

//     </div>
//   );
// };

// export default Card;

import React from 'react'

const Card = ({cardInfo}) => {
  let {img,title,description}=cardInfo
  return (
  <>
  <div  style={{background:"#f1f1f1",height:"280px",padding:"18px"}}>
   <div>
<img src={img} alt="" />
   </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>


  
  
  </>
  )
}

export default Card