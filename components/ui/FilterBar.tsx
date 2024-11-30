import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import SearchBar from '@/components/ui/SearchBar';
import CheckBox from '@/components/ui/CheckBox';

interface FilterBarProps {
    searchValue: string;
    onSearchChange: (text: string) => void;
    showFavorites: boolean;
    onShowFavoritesChange: (value: boolean) => void;
}

const FilterBar: React.FC<FilterBarProps> = (
    {searchValue, onSearchChange, showFavorites, onShowFavoritesChange,}) => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={23} color="#555" style={styles.icon}/>
                <SearchBar value={searchValue} onChange={onSearchChange} style={styles.searchBar}/>
            </View>

            <View style={styles.separator}/>

            <CheckBox
                label="Show Favorites"
                value={showFavorites}
                onChange={onShowFavoritesChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    icon: {
        marginRight: 8,
    },
    searchBar: {
        flex: 1,
    },
    separator: {
        height: 1,
        backgroundColor: '#ddd',
        marginBottom: 10,
    },
});

export default FilterBar;
