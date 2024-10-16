import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ poster_path}) => {
  return (
    poster_path && <div className='w-32 md:w-48 pr-3'>
      <img className='h-40 md:h-60' src={IMG_CDN_URL + poster_path} alt="movie poster" />
    </div>
  )
}

export default MovieCard
