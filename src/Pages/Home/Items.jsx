import React from 'react'
import { Link } from 'react-router-dom';

export default function AllItems({ items }) {
    console.log(items);
  
    return (
        <div className='flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white'>
            <div className='h-40 flex justify-center overflow-hidden items-center rounded-xl'>
                <img src= {items.image_url} alt="" className='block w-full ' />
            </div>
            <div>
                <span className='text-sm text-cyan-700 font-medium'>{items.publisher}</span>
                <h3 className='font-bold text-2xl truncate text-black'>{items.title}</h3>
                <Link to = {`/Details/${items.id}`} className='text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-mg bg-black text-white mt-3'>
                    Recipe Details
                </Link>
            </div>
        </div>

    );
  }
  
    //   <>
    //     {items && items.length > 0 ? (
    //       items.map((e, index) => (
    //         <div key={index}>
    //           <h3>{e.publisher}</h3>
    //           <img src={e?.image_url} alt={e.publisher} />
    //         </div>
    //       ))
    //     ) : (
    //       <p>No items to display</p>
    //     )}
    //   </>