import React from 'react';
import {View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import SearchBar from '@/components/ui/SearchBar';
import CheckBox from '@/components/ui/CheckBox';
import filterBarStyles from "@/styles/routes/tabs/home/filterBarStyles";

interface FilterBarProps {
    searchValue: string;
    onSearchChange: (text: string) => void;
    showFavorites: boolean;
    onShowFavoritesChange: (value: boolean) => void;
}

const FilterBar: React.FC<FilterBarProps> = (
    {searchValue, onSearchChange, showFavorites, onShowFavoritesChange,}) => {
    return (
        <View style={filterBarStyles.container}>
            <View style={filterBarStyles.searchContainer}>
                <Ionicons name="search" size={23} color="#555" style={filterBarStyles.icon}/>
                <SearchBar value={searchValue} onChange={onSearchChange} style={filterBarStyles.searchBar}/>
            </View>

            <View style={filterBarStyles.separator}/>

            <CheckBox
                label="Show Favorites"
                value={showFavorites}
                onChange={onShowFavoritesChange}
            />
        </View>
    );
};

export default FilterBar;