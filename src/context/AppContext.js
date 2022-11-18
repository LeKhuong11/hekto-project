import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
    const [ search, setSearch ] = useState('');
      
    return <AppContext.Provider value={{search, setSearch}}>
        { children }
    </AppContext.Provider>
}