import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const RegisterPage = () => {
    const[name,setName] =useState("");
  return (
    <div className='mt-4 grow flex items-center justify-around '>
       <div className='mb-64'>
       <h1 className='text-4xl  text-center mb-5'>Register</h1>
     <form className='max-w-lg mx-auto '>
        <input type='text' placeholder='Enter Your name'/>
        <input type='email' placeholder='your@email.com' />
        <input type='password' placeholder='Enter your Password' />
        <button className='primary'>Register</button>
        <div className='text-center py-2  text-gray-500'>Already a member?  <Link className="underline text-black" to={"/login"}>Login </Link>
         </div>

     </form>
       </div>
    </div>
  )
}

export default RegisterPage
