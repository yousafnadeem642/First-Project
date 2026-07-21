
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

