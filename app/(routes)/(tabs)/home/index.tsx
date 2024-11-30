import React from 'react';
import {FlatList, View, Text} from 'react-native';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import {ListRenderItemInfo} from 'react-native';
import {CodingResource} from '@/services/api/types';
import {useFilterResources} from '@/hooks/api/useFilterResources';
import FilterBar from '@/components/ui/FilterBar';
import homeScreenStyles from "@/styles/routes/tabs/home/homeScreenStyles";
import HomeScreenRenderItem from "@/components/route/tabs/home/HomeScreenRenderItem";

const HomeScreen: React.FC = () => {
    const {
        filteredResources,
        loading,
        error,
        search,
        setSearch,
        showFavorites,
        setShowFavorites,
    } = useFilterResources();

    if (loading) return <LoadingSpinner visible/>;
    if (error) return <Text>{error}</Text>;

    return (
        <View style={homeScreenStyles.container}>
            <FilterBar
                searchValue={search}
                onSearchChange={setSearch}
                showFavorites={showFavorites}
                onShowFavoritesChange={setShowFavorites}
            />
            <FlatList
                data={filteredResources}
                renderItem={({item}: ListRenderItemInfo<CodingResource>) => <HomeScreenRenderItem item={item}/>}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default HomeScreen;