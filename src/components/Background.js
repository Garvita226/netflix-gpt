import React from 'react'
import { BG_URL } from '../utils/constants'

const Background = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-30">
        <div className="z-20 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        <img
          className="w-full h-full object-cover"
          src={BG_URL}
          alt="background"
        />
      </div>
  )
}

export default Background
