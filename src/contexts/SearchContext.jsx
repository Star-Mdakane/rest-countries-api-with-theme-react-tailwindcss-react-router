import { createContext, useState } from "react";

export const searchContext = createContext(null)

export const SearchProvider = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState("");

    const value = {
        searchTerm,
        setSearchTerm
    }


    return (
        <searchContext.Provider value={value}>
            {children}
        </searchContext.Provider>
    )
}