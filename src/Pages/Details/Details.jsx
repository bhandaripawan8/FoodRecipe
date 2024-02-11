import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();
  const { recipeDetails, setrecipeDetails, handleAddToFavourite } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        const data = await response.json();
        console.log(data);

        if (data?.data) {
          setrecipeDetails(data.data);
        }
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    }
    getRecipeDetails();
  }, [id]);

  console.log(recipeDetails);
  return (
<div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
  <div>
    <div>
  <img src={recipeDetails?.recipe?.image_url} alt="" className='w-full h-full object-cover block group-hover:scale-105 duration-300 p-5'/>
    </div>
  </div>
  
  <div className='flex flex-col'>
    <h3 className='text-3xl font-semibold text-black'>{recipeDetails?.recipe?.title}</h3>
    <p>Cooking time: {recipeDetails?.recipe?.cooking_time}</p>
    <div>
      <span className='text-2xl font-semibold text-black'>Ingredients</span>
      <ul className='flex flex-col gap-2 mt-2'>
        {
          recipeDetails?.recipe?.ingredients.map((ingredient, index) =>
            <li key={index}>
              <span>{ingredient.quantity} {ingredient.unit}</span>
              <span>{ingredient.description}</span>
            </li>
          )
        }
      </ul>
    </div>
    <button onClick={()=> handleAddToFavourite(recipeDetails?.recipe)} className='mt-5 text-sm p-3 px-6 lg:px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-mg bg-black text-white lg:mt-0'>Add to your Favourite..</button>
  </div>
</div>
  );
}  