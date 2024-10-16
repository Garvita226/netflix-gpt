import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidEmail } from '../utils/validate';
import { checkValidPassword } from '../utils/validate';
import { checkValidName } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_ICON } from '../utils/constants';
import Background from './Background';
import { toggleGptSearchView } from '../utils/gptSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [error, setError] = useState(null);

  const emailRef = useRef(null);
  const passRef = useRef(null);
  const nameRef = useRef(null);

  const handleClick = () => {
    const emailMsg = checkValidEmail(emailRef.current.value)
    const passMsg = checkValidPassword(passRef.current.value)
    setEmailError(emailMsg)
    setPasswordError(passMsg)

    if (!isSignIn) {
      const nameMsg = checkValidName(nameRef.current.value)
      setNameError(nameMsg)
    }

    if (emailError || passwordError || nameError) return;

    // Sign up logic
    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value, photoURL: USER_ICON
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }))
              setError(null)
            })
        })
        .catch((error) => {
          const errorCode = error.code;
          setError(errorCode)
        });
    }

    // Sign in logic
    signInWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        setError(null)
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        setError(errorCode)
        // console.log(errorCode + ': ' + errorMessage)
      });

  }

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
        <div className='w-10/12 md:w-4/12 bg-black bg-opacity-55 p-8 md:p-16 text-white rounded-sm'>

          <form onSubmit={(e) => e.preventDefault()} action="" className='flex flex-col'>

            <h1 className='font-bold text-2xl md:text-3xl pb-3'>{isSignIn ? "Sign in" : "Sign up"}</h1>

            {!isSignIn && <div className='w-full'>
              <input type="text" ref={nameRef} placeholder='Full Name' className='w-full p-3 my-3 rounded-sm bg-gray-950 bg-opacity-55 border border-gray-600' />
              <p className='text-red-600 text-sm mb-3'>{nameError}</p></div>
            }

            <input type="text" ref={emailRef} placeholder='Email Address' className='p-3 mt-3 mb-2 rounded-sm bg-gray-950 bg-opacity-55 border border-gray-600' />
            <p className='text-red-600 text-sm mb-3'>{emailError}</p>

            <input type="password" ref={passRef} placeholder='Password' className='p-3 mt-3 mb-2 rounded-sm bg-gray-950 bg-opacity-55 border border-gray-600' />
            <p className='text-red-600 text-sm mb-3'>{passwordError}</p>

            <p className='text-red-600 text-sm mt-3'>{error}</p>
            <button onClick={handleClick} className='font-semibold p-3 my-3 rounded-sm bg-red-700 text-white'>{isSignIn ? 'Sign in' : 'Sign up'}</button>

            <p className='pt-4'>
              <span className='text-gray-400'>{isSignIn ? 'New to Netflix?' : 'Already a user?'} </span>
              <span className='font-semibold cursor-pointer hover:underline' onClick={toggleSignIn}>{isSignIn ? 'Sign up now.' : 'Sign in.'}</span>
            </p>
          </form>
        </div>
      </div>

      {/* Background Image Section */}
      <Background />

    </div>
  );
};

export default Login;
