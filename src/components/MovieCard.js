import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({title, poster_path}) => {
  return (
    <div className='w-48 pr-3'>
      <img src={IMG_CDN_URL + poster_path} alt="movie poster" />
    </div>
  )
}

export default MovieCard
