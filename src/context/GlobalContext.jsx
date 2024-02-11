import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext(null);

export default function globalState({children}){
    const [searchParam, setsearchParam] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const [resData, setresData] = useState([]);
    const [recipeDetails, setrecipeDetails] = useState({});
    const [favourites, setfavourites] = useState([]);

    async function handleSearch(e){
        e.preventDefault();
        try{
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            const data = await res.json();
            if(data.data.recipes){
                setresData(data.data.recipes);
                setisLoading(false);
                setsearchParam('');
            }

        }catch(e){
            console.log(e);
            setisLoading(false);
            setsearchParam('');
        }
    }

    console.log(isLoading,resData);

    function handleAddToFavourite(getCurrentItem){
        let cpyFavourites = [...favourites];
        const index = cpyFavourites.findIndex(item => item.id === getCurrentItem.id)
        if(index === -1){
            cpyFavourites.push(getCurrentItem)
        } else{
            cpyFavourites.splice(index, 1); 
        }
        setfavourites(cpyFavourites);
    }
    console.log(handleAddToFavourite);
    
    console.log(favourites);
    return (
        <GlobalContext.Provider value={{searchParam, setsearchParam, handleSearch, isLoading, resData, recipeDetails, setrecipeDetails, handleAddToFavourite, favourites}}>{children}</GlobalContext.Provider>
    )
}