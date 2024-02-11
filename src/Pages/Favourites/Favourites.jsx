import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Items from '../Home/Items'

export default function Favourites() {
  const { favourites } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favourites && favourites.length > 0 ? 
        favourites.map((item, index) => (
          <Items key={item.index} item={item} />
        )) : (
          <h3 className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in your favourite list...
          </h3>
        )}
    </div>
  )
}
