import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Items from './Items';

export default function Home() {
  const {isLoading, resData} = useContext(GlobalContext);
  if (isLoading) return <div>Loading...please wiat!</div>

  return (
    <div className = "py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {resData && resData.length > 0 ? 
      resData.map((items, index) =>
          <Items key = {index} items = {items}/>) :  (
    <h3 className = "lg:text-4xl text-xl text-center text-black font-extrabold">No items found...</h3> )}
    </div>
  )
}
