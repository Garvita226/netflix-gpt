import React from 'react'
import { useSelector } from 'react-redux'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const user = useSelector((state) => state.user)
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute bg-gradient-to-b from-black w-screen flex justify-between items-center'>
      <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

      {
        user && (<div className='flex'>
          <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="usericon" />
          <button onClick={handleSignOut} className='bg-red-600 text-white font-semibold rounded-md mx-4 px-3 py-1 cursor-pointer'>Sign out</button>
        </div>)
      }

    </div>
  )
}

export default Header
