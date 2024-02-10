import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext(null);

export default function globalState({children}){

    const [searchParam, setsearchParam] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const [resData, setresData] = useState([]);
    const [recipeDetails, setrecipeDetails] = useState({});

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

    return (
        <GlobalContext.Provider value={{searchParam, setsearchParam, handleSearch, isLoading, resData, recipeDetails, setrecipeDetails}}>{children}</GlobalContext.Provider>
    )
}