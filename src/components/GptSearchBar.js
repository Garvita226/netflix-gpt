import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { languages } from '../utils/languageConstants';
import { useGptSearch } from '../utils/useGptSearch';
// import { openai } from '../utils/openai';

const GptSearchBar = () => {
  const gptSearchText = useRef();
  const langKey = useSelector(store => store.config.lang);
  const {handleGptClick} = useGptSearch(gptSearchText)

  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center'>
      <form className='w-[90%] md:w-1/2 bg-black grid grid-cols-12 p-4 md:p-6 rounded-md' onSubmit={(e) => e.preventDefault()}>
        <input ref={gptSearchText} type="text" placeholder={languages[langKey].placeholderText} className='col-span-9 py-2 px-2 md:px-4 border-none mr-4 rounded-md'/>
        <button className='col-span-3 bg-red-700 text-white font-semibold text-lg rounded-md' onClick={handleGptClick}>{languages[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
