import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  }

  return (
    <div className="relative h-screen">
      {/* Header Section */}
      <div className="relative opacity-100 z-30">
        <Header />
      </div>

      {/* Form section */}
      <div className='z-50 absolute inset-0 flex justify-center items-center'>
        <div className='w-4/12 bg-black bg-opacity-55 p-16 text-white rounded-sm'>
          <form action="" className='flex flex-col'>
            <h1 className='font-bold text-3xl pb-3'>{isSignIn ? "Sign in" : "Sign up"}</h1>
            {!isSignIn && <input type="text" placeholder='Full Name' className='p-3 my-3 rounded-sm bg-gray-800' />}
            <input type="text" placeholder='Email Address' className='p-3 my-3 rounded-sm bg-gray-800' />
            <input type="password" placeholder='Password' className='p-3 my-3 rounded-sm bg-gray-800' />
            <button className='font-semibold p-3 my-3 rounded-sm bg-red-700 text-white'>{isSignIn ? 'Sign in' : 'Sign up'}</button>

            <p className='pt-4'>
              <span className='text-gray-400'>{isSignIn ? 'New to Netflix?' : 'Already a user?'} </span>
            <span className='font-semibold cursor-pointer hover:underline' onClick={toggleSignIn}>{isSignIn ? 'Sign up now.' : 'Sign in.'}</span>
            </p>
          </form>
        </div>
      </div>

      {/* Background Image Section */}
      <div className="absolute top-0 left-0 w-full h-full z-20">
        {/* Overlay */}
        <div className="z-20 absolute top-0 left-0 w-full h-full bg-black bg-opacity-55"></div>
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
          alt=""
        />
      </div>

    </div>
  );
};

export default Login;
