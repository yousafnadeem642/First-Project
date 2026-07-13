// import { Link } from "react-router-dom";

// function Footer() {
//   return (
//     <footer className="bg-dark text-light py-4 mt-5">
//       <div className="container">
//         <div className="row">
//           {/* About */}
//           <div className="col-md-4 mb-3">
//             <h4 className="fw-bold"><i>My PortFolio</i></h4>
//             <p className="text-white-50">
//               We provide quality content, useful plans, and the latest blogs
//               to help you grow.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="col-md-4 mb-3">
//             <h5>Quick Links</h5>

//             <ul className="list-unstyled">
//               <li>
//                 <Link to="/" className="text-decoration-none text-white-50">
//                   Home
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/plan" className="text-decoration-none text-white-50">
//                   Plan
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/blog" className="text-decoration-none text-white-50">
//                   Blog
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/login" className="text-decoration-none text-white-50">
//                   Login
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/signup" className="text-decoration-none text-white-50">
//                   Sign Up
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="col-md-4 mb-3">
//             <h5>Contact</h5>
//             <p className="text-white-50">📧 info@mywebsite.com</p>
//             <p className="text-white-50">📞 +92 300 1234567</p>
//             <p className="text-white-50">📍 Pakistan</p>
//           </div>
//         </div>

//         <hr className="border-secondary" />

//         <div className="text-center text-white-50">
//           © 2026 MyWebsite. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react'

const Footer = () => {
  return (
  <>
  <footer className="text-light bg-dark">
<div className="container">
  <div className="row">
    <div className="col-md-4 mb-5">
      <h4 className='fw-bold'>
       <i> My Website</i>
      </h4>
      <p>
                 We provide quality content, useful plans, and the latest blogs
//               to help you grow.
      </p>
    </div>
    <div className="col-md-4 fw-bold mb-5">
     <h4>Quick Links</h4>
     <ul className="list-unstyled">
      <li><a href="/"  className='text-decoration-none text-white-50'>Home</a></li>
      <li><a href="/Plan" className='text-decoration-none text-white-50'>Plans</a></li>
      <li><a href="/Blog" className='text-decoration-none text-white-50'>Blog</a></li>
     </ul>
    </div>
    <div className="col-md-4 mb-5">
                 <h5>Contact</h5>
          <p className="text-white-50">📧 yousaf4414361@gmail.com</p>
            <p className="text-white-50">📞 +92 3426413381</p>
            <p className="text-white-50">📍 Pakistan</p>
    </div>
  </div>
</div>
  </footer>
  
  
  </>
  )
}

export default Footer