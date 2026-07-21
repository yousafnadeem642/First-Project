// import React, { useState } from "react";

// const Login = () => {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(user);
//     alert("Login Successful!");
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="card shadow p-4" style={{ width: "400px" }}>
//         <h2 className="text-center mb-4">Login</h2>

//         <form onSubmit={handleSubmit}>
//           {/* Email */}
//           <div className="mb-3">
//             <label className="form-label">Email Address</label>
//             <input
//               type="email"
//               className="form-control"
//               name="email"
//               placeholder="Enter your email"
//               value={user.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               placeholder="Enter your password"
//               value={user.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Remember Me */}
//           <div className="form-check mb-3">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               id="remember"
//             />
//             <label className="form-check-label" htmlFor="remember">
//               Remember Me
//             </label>
//           </div>

//           {/* Login Button */}
//           <button type="submit" className="btn btn-primary w-100">
//             Login
//           </button>
//         </form>

//         <div className="text-center mt-3">
//           <a href="#" className="text-decoration-none">
//             Forgot Password?
//           </a>
//         </div>

//         <p className="text-center mt-3 mb-0">
//           Don't have an account?{" "}
//           <a href="./Signup" className="text-decoration-none">
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
////////////////
import React, { use, useState } from 'react'

const Login = () => {
  let [user,setUser]=useState({
    email:"",
    password:""
  })
  let handleChange=(e)=>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  let handleSubmit=(e)=>{
    e.preventDefault();
if(!password){
  alert("please enter password")
  return
}
alert("good")
console.log(user);

    
  }
  return (
  <>
  <div className="container d-flex justify-content-center">
     <div style={{width:"400px"}} className='card shadow p-4'>
<h2 className='text-center mb-4'>
  LogIN
</h2>
<form action="" onSubmit={handleSubmit}>
<div>
  <label htmlFor="" className='form-label'>Email</label>
  <input type="Email" name="email" id="" className='form-control' placeholder='Enter your Email' onChange={handleChange} value={user.email}/>
</div>
<div>
  <label htmlFor="" className='form-label'>Password</label>
  <input type="password" name="password" id="" className='form-control' onChange={handleChange} value={user.password}/>
</div>
<div className='form-check mb-3'>
<input type="checkbox" className='form-check-input' name="" id="remember" />
<label htmlFor="remember" className='form-check-label'>Remember me</label>
</div>
<button className='btn btn-primary' type='submit'>
login
</button>
</form>
<div className='text-center'>
<a href="#" className='text-decoration-none'>Forget Password</a>
</div>
<p className='text-center'>
 Dont have an account ?{" "} 

 <a href="signup" className='text-decoration-none'>
  Signup
 </a>
</p>


     </div>
  </div>
  
  
  
  
  </>
  )
}

export default Login

