import { createContext, useState } from "react";

export const SearchContext = createContext(null)

export const SearchProvider = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState("");

    const value = {
        searchTerm,
        setSearchTerm
    }


    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}