import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();
  const { recipeDetails, setrecipeDetails } = useContext(GlobalContext);

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
  }, [id, setrecipeDetails]);

  console.log(recipeDetails);
  return (
    //  className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'
    <div  className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
      {/* className='row-start-2 lg:row-start-auto' */}
      <div  className='row-start-2 lg:row-start-auto' >
        <img src= {recipeDetails.recipe.image_url}alt={recipeDetails?.recipe?.title} className='w-full h-full object-cover block group-hover:scale-105 duration-300' />
        {/* <img src={recipeDetails?.recipe?.source_URL} alt={recipeDetails?.recipe?.title} className='w-full h-full object-cover block group-hover:scale-105 duration-300'/> */}

      </div>
      <h2>{recipeDetails?.recipe?.title}</h2>
    </div>
  );
}
