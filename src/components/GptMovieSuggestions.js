import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector(store => store.gpt)

  return (
    <div className='px-2 py-4 mx-4 my-10 bg-black text-white bg-opacity-90 rounded-md'>
      {movieNames ? movieNames.map((movieName, index) => {
        return <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
      }) : ( <div className='flex items-center flex-col'>
        <h1 className='text-xl font-semibold my-6'>Search movies to display suggestions! 😉</h1>
        <small><i>This page uses mock search results. The search functionality will work for the following queries: 'comedy', 'horror', 'romantic', 'action', 'zombie', 'horror comedy' and 'psychothriller'</i></small>
      </div>
      )}
    </div>
  )
}

export default GptMovieSuggestions
