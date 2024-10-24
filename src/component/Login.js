import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm , setIsSignInForm] = useState(null);

  const toggleSignEvent =()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
         <Header/>
         <div className='absolute'>
         <img 
          src='https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg'
          alt='logo'/>
         </div>

         <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
         <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && (<input type='text' placeholder='User-Name' className='p-4 my-4 w-full bg-gray-700'/>)}
          <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
          <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignEvent}>{isSignInForm ? "New To Nerflix ? Sign Up Now" : "Already Registerd ? Sign In Now"}</p>
         </form>
    </div>
  )
}

export default Login
