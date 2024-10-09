import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies)

  if (!movies) return;

  const mainMovie = movies[0]
  const { title, overview, id } = mainMovie;

  return (
    <div className='w-screen overflow-hidden'>
      <div className='-mt-20'>
        <VideoTitle title={title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
    </div>
  )
}

export default MainContainer
