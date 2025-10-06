import React, { useState, useEffect } from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const[searchQuery, setSearchquery] = useState("");
  // console.log(searchQuery);
  const[suggestions, setSuggestions] = useState([]);
  const[showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log( searchQuery);
    const timer = setTimeout(() => {

      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions()
      }
    },200);

    return() => {
      clearTimeout(timer);
    };
  }, [searchQuery])

  const getSearchSuggestions = async() =>{
    console.log( "API call-"+ searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));
  };

  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className=' grid grid-flow-col p-5  shadow-lg'>
      <div className='flex col-span-1 '> 
        <img 
        onClick={() => toggleMenuHandler()}
        className='h-8 cursor-pointer'
        alt='menu' 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s'
        />

        <a href='/'>
          <img
          className='h-8 mx-2'
          alt='youtube-logo'
          src='https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg'
          />
        </a>
      </div>

      <div className='col-span-10 px-10'>
        <div>
          <input 
          className=' px-5 border border-gray-400 w-1/2 rounded-l-full p-1.5' 
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchquery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}

          />
          <button className='border border-gray-400 p-1.5 rounded-r-full px-5 bg-gray-100'>🔍</button>
        </div>
        { showSuggestions && (
          <div className='absolute bg-white py-2 px-2 w-[36.2rem] shadow-lg rounded-lg border border-gray-100'>
          <ul>
            {suggestions.map((s) => (
            <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>
              🔍 {s}
            </li>
            ))}
          </ul>
          </div>
        )}
      </div>
      <div className='col-span-1'>
        <img
        className='h-10'
        alt='user'
        src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        />
      </div>
    </div>
    
  )
}

export default Head
