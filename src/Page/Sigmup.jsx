

import React, { useState } from 'react'

const Sigmup = () => {
  let [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  })
const handleChange=(e)=>{
setUser({
  ...user,
  [e.target.name] : e.target.value,
})
}
const handleSubmit=(e)=>{
e.preventDefault()

if(user.password !==user.confirmPassword){
  alert("Password do not match")
  return;
}
alert("Signup Succesfull")
console.log(user);

}
  return (
  <>
  <div  className='container d-flex justify-content-center align-items-center vh-100'>
     <div className='card shadow p-4' style={{width:"400px"}}> 
<h2 className='text-center mb-4'>Signup</h2>
<form action="" onSubmit={handleSubmit}>
<div>
  <label htmlFor="" className='form-label'>Name</label>
  <input type="text" name="name" id="" className='form-control' onChange={handleChange} value={user.name} />
</div>
<div>
  <label htmlFor="" className='form-label'>Email</label>
  <input type="email" name="email" id="" className='form-control' onChange={handleChange} value={user.email}/>
</div>
<div>
  <label htmlFor="" className='form-label'>Password</label>
  <input type="password" className='form-control' name="password" id="" onChange={handleChange} value={user.password} />
</div>
<div className='mb-4'>
  <label htmlFor="" className='form-label'>Confirm Password</label>
  <input type="password" name="confirmPassword" id="" className='form-control' onChange={handleChange} value={user.confirmPassword} />
</div>

       <button type="submit" className="btn btn-primary w-100">
             Sign Up
           </button>
         </form>

         <p className="text-center mt-3 mb-0">
           Already have an account?{" "}
           <a href="./login" className="text-decoration-none">
             Login
           </a>
        </p>
     </div>
  </div>
  
  
  
  </>
  )
}

export default Sigmup
