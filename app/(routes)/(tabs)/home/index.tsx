import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import {CodingResource} from '@/services/api/types';
import {useFilterResources} from '@/hooks/api/useFilterResources';
import FilterBar from '@/components/ui/FilterBar';
import homeScreenStyles from "@/styles/routes/tabs/home/homeScreenStyles";
import FilteredList from '@/components/route/tabs/home/FilteredList';

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

    useEffect(() => {
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
            <FilteredList
                visibleItems={visibleItems}
                setVisibleItems={setVisibleItems}
                filteredResources={filteredResources}
                refreshing={refreshing}
                handleRefresh={handleRefresh}
            />
        </View>
    );
};

export default HomeScreen;