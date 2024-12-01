import React from 'react';
import {View} from 'react-native';
import {useFilterResources} from '@/hooks/api/useFilterResources';
import FilterBar from '@/components/ui/FilterBar';
import FilteredList from '@/components/route/tabs/home/FilteredList';
import LoadingOrError from '@/components/ui/LoadingOrError';
import homeScreenStyles from "@/styles/routes/tabs/home/homeScreenStyles";
import {useLazyLoading} from "@/hooks/route/tabs/home/useLazyLoading";

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

    const {visibleItems, setVisibleItems} = useLazyLoading(filteredResources);

    return (
        <View style={homeScreenStyles.container}>
            <LoadingOrError loading={loading} refreshing={refreshing} error={error}/>
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
