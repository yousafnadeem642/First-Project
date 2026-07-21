


// import React, { useEffect, useState } from 'react'

// const Blog = () => {
//   const[products,setProducts]=useState([]);
//   useEffect(()=>{
//     fetch("https://dummyjson.com/products")
//     .then((res)=>res.json())
//     .then((data)=>{
//       setProducts(data.products)
//     })
//   },[])
//   return (
//     <div>
//       <h1>All Products</h1>
//       {products.map((item)=>(
//         <div key={item.id}>

//             <img src={item.thumbnail}  width="150"  />
//           <h2>{item.title}</h2>
//           <p>{item.description}</p>
//           <p>Price:${item.price}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Blog

import React, { useEffect, useState } from 'react'

const Blog = () => {
  const[product,setProduct]=useState([])
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((data)=>{
    setProduct(data.products)
    })
  },[])
  return (
    <div>
      <h1>All Products</h1>
      {product.map((item)=>(
        <div key={item.id}  >
          <img src={item.thumbnail} alt="" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Blog
