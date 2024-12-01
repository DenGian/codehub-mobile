import React, {createContext, useState, useContext, ReactNode} from 'react';

interface FilterContextType {
    search: string;
    setSearch: (value: string) => void;
    showFavorites: boolean;
    setShowFavorites: (value: boolean) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [search, setSearch] = useState('');
    const [showFavorites, setShowFavorites] = useState(false);

    return (
        <FilterContext.Provider value={{search, setSearch, showFavorites, setShowFavorites}}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = (): FilterContextType => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilterContext must be used within a FilterProvider');
    }
    return context;
};
