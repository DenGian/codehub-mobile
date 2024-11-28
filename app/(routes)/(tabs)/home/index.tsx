import React from 'react';
import {FlatList, View, Text} from 'react-native';
import EventCard from "@/components/route/tabs/home/eventCard";
import {useCodingResources} from '@/hooks/api/useCodingResources';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import {CodingResource} from "@/services/api/types";
import {ListRenderItemInfo} from 'react-native';
import {useFavorites} from "@/hooks/storage/useFavorites";

const HomeScreen: React.FC = () => {
    const {resources, loading, error} = useCodingResources();
    const {favorites, toggleFavorite} = useFavorites();

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
                onDetailsPress={() => {
                    // Placeholder for details press functionality
                }}
            />
        );
    };

    if (loading) return <LoadingSpinner visible={true}/>;
    if (error) return <Text>{error}</Text>;

    return (
        <View>
            <FlatList
                data={resources}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default HomeScreen;
