import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {useRouter} from 'expo-router';
import EventCard from '@/components/route/tabs/home/eventCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import {ListRenderItemInfo} from 'react-native';
import {CodingResource} from '@/services/api/types';
import {useFavorites} from '@/hooks/storage/useFavorites';
import {useFilterResources} from '@/hooks/api/useFilterResources';
import FilterBar from '@/components/ui/FilterBar';

const HomeScreen: React.FC = () => {
    const router = useRouter();
    const {favorites, toggleFavorite} = useFavorites();
    const {
        filteredResources,
        loading,
        error,
        search,
        setSearch,
        showFavorites,
        setShowFavorites,
    } = useFilterResources();

    const renderItem = ({item}: ListRenderItemInfo<CodingResource>) => {
        const isFavorite = favorites.includes(item.id);
        return (
            <EventCard
                id={item.id}
                title={item.description}
                types={item.types.join(', ')}
                topics={item.topics.join(', ')}
                isFavorite={isFavorite}
                onToggleFavorite={() => toggleFavorite(item.id)}
                onDetailsPress={() => router.push(`/home/details/${item.id}`)}
            />
        );
    };

    if (loading) return <LoadingSpinner visible/>;
    if (error) return <Text>{error}</Text>;

    return (
        <View style={styles.container}>
            <FilterBar
                searchValue={search}
                onSearchChange={setSearch}
                showFavorites={showFavorites}
                onShowFavoritesChange={setShowFavorites}
            />
            <FlatList
                data={filteredResources}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {flex: 1, padding: 10},
});

export default HomeScreen;
