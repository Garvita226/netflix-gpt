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
    <div className='w-full overflow-hidden'>
      <div className='pt-[30%] md:pt-0 md:-mt-20 bg-black'>
        <VideoTitle title={title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
    </div>
  )
}

export default MainContainer
