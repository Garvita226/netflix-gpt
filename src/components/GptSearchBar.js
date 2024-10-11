import React from 'react'
import { useSelector } from 'react-redux'
import { languages } from '../utils/languageConstants';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12 p-6 rounded-md'>
        <input type="text" placeholder={languages[langKey].placeholderText} className='col-span-9 p-2 border-none mr-4 rounded-md'/>
        <button className='col-span-3 bg-red-700 text-white font-semibold text-lg rounded-md'>{languages[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
