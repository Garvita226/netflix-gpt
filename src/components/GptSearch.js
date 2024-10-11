import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import Background from './Background'

const GptSearch = () => {
  return (
    <div className='relative h-screen'>
      <GptSearchBar/>
      <GptMovieSuggestions/>
      <Background/>
    </div>
  )
}

export default GptSearch
