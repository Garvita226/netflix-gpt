import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }))
      } else {
        dispatch(removeUser())
      }
    });
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default Body
