import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext(null);

export default function globalState({children}){

    const [searchParam, setsearchParam] = useState('');

    return (
        <GlobalContext.Provider value={{searchParam, setsearchParam}}>{children}</GlobalContext.Provider>
    )
}