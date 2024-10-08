import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='z-30 absolute text-white pt-[20%] px-12 w-screen aspect-video bg-gradient-to-r from-black'>
      <h1 className='font-bold text-5xl'>{title}</h1>
      <p className='text-lg py-4 w-1/3'>{overview}</p>
      <div>
        <button className='bg-white text-black py-2 px-6 mr-2 my-2 text-lg font-semibold rounded-md hover:bg-opacity-80'> <i className="fa-solid fa-play" style={{color: "#050505"}}></i> Play</button>
        <button className='bg-gray-500 text-white text-lg font-bold my-2 ml-2 py-2 px-6 rounded-md bg-opacity-50 hover:bg-opacity-70'> <i className="fa-solid fa-circle-info" style={{color: "#050505;"}}></i> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
