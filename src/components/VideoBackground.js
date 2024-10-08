import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(store => store.movies?.movieTrailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className='absolute z-20' style={{top:'-5%'}}>
      <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=lAyQWKpYYl6tPxkT&autoplay=1&mute=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackground
