import React, {useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import {CodingResource} from '@/services/api/types';
import {useFilterResources} from '@/hooks/api/useFilterResources';
import FilterBar from '@/components/ui/FilterBar';
import homeScreenStyles from "@/styles/routes/tabs/home/homeScreenStyles";
import {loadMoreItems} from '@/utils/loadMoreItems';
import {renderItem} from "@/components/route/tabs/home/RenderItem";

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
                renderItem={renderItem}
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