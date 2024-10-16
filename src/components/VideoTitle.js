import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='z-30 absolute text-white pt-[25%] md:pt-[20%] px-6 md:px-12 w-screen aspect-video bg-gradient-to-r from-black flex md:block items-center'>
      <h1 className='font-bold text-2xl md:text-5xl'>{title}</h1>
      <p className='hidden md:inline-block text-lg py-4 w-1/2'>{overview}</p>
      <div>
        <button className='bg-white text-black py-1 md:py-2 px-3 md:px-6 mr-2 ml-3 md:ml-0 my-2 text-base md:text-lg font-medium md:font-semibold rounded-md hover:bg-opacity-80'> <i className="fa-solid fa-play" style={{color: "#050505"}}></i> Play</button>
        <button className='bg-gray-500 hidden md:inline-block text-white text-lg font-bold my-2 ml-2 py-2 px-6 rounded-md bg-opacity-50 hover:bg-opacity-70'> <i className="fa-solid fa-circle-info" style={{color: "#ffffff"}}></i> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
