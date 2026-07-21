

import React from 'react'

const Footer = () => {
  return (
  <>
  <footer className="text-light bg-dark pt-5">
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