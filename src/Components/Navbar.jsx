
import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

export default function Navbar() {
  const {searchParam, setsearchParam, handleSearch} = useContext(GlobalContext);
  console.log
  
  return (
    <nav className='flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0'>
        <h2 className='text-2xl font-semibold'>
          <NavLink to = {'/'} className = "text-black hover:text-gray-700 duration-300">Food Recipe</NavLink>
        </h2>
        <form onSubmit={handleSearch}>
          <input type="text" name='search' placeholder='Try finding your desired recipe here...' className='bg-white/75 p-3 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200' value={searchParam} onChange= {(e) => setsearchParam(e.target.value)}/>
        </form>
          <ul className='flex gap-5'>
              <li>
                <NavLink to = {'/'} className = "text-black hover:text-gray-700 duration-300">Home</NavLink>
              </li>
              <li>
                <NavLink to = {'/favourites'} className = "text-black hover:text-gray-700 duration-300">Favourites</NavLink>
              </li>   
          </ul>
    </nav>
  )
}
