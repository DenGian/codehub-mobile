import React, {useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import {ListRenderItemInfo} from 'react-native';
import {CodingResource} from '@/services/api/types';
import {useFilterResources} from '@/hooks/api/useFilterResources';
import FilterBar from '@/components/ui/FilterBar';
import homeScreenStyles from "@/styles/routes/tabs/home/homeScreenStyles";
import HomeScreenRenderItem from "@/components/route/tabs/home/HomeScreenRenderItem";
import {loadMoreItems} from "@/utils/loadMoreItems";

const HomeScreen: React.FC = () => {
    const {
        filteredResources,
        loading,
        error,
        search,
        setSearch,
        showFavorites,
        setShowFavorites,
        refreshing,
        handleRefresh
    } = useFilterResources();

    const [visibleItems, setVisibleItems] = useState<CodingResource[]>([]);

    React.useEffect(() => {
        setVisibleItems(filteredResources.slice(0, 5));
    }, [filteredResources]);

    if (loading && !refreshing) return <LoadingSpinner visible/>;
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
                data={visibleItems}
                renderItem={({item}: ListRenderItemInfo<CodingResource>) => <HomeScreenRenderItem item={item}/>}
                keyExtractor={(item) => item.id.toString()}
                refreshing={refreshing}
                onRefresh={handleRefresh}
                onEndReached={() => loadMoreItems(visibleItems, setVisibleItems, filteredResources)}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
};

export default HomeScreen;