import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext(null);

export default function globalState({children}){

    const [searchParam, setsearchParam] = useState('');
    async function handleSearch(e){
        e.preventDefault();
        try{
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            const data = await res.json();
            console.log(data);
        }catch(e){
            console.log(e);
        }
    }

    return (
        <GlobalContext.Provider value={{searchParam, setsearchParam, handleSearch}}>{children}</GlobalContext.Provider>
    )
}