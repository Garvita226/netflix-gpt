import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const user = useSelector((state) => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });

    return () => unsubscribe()
  }, [])

  const handleSignOut = () => {
    signOut(auth).then(() => {}).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute bg-gradient-to-b from-black w-screen flex justify-between items-center z-50'>
      <img className='w-44' src={LOGO} alt="logo" />

      {
        user && (<div className='flex'>
          <img className='w-8 h-8' src={user.photoURL} alt="usericon" />
          <button onClick={handleSignOut} className='bg-red-600 text-white font-semibold rounded-md mx-4 px-3 py-1 cursor-pointer'>Sign out</button>
        </div>)
      }

    </div>
  )
}

export default Header
