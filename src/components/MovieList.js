import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='px-4 md:px-6 pt-4 w-full overflow-hidden'>
            <h1 className='text-xl md:text-2xl py-3 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {movies?.map(movie => <MovieCard key={movie.id} title={movie.title} poster_path={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList
