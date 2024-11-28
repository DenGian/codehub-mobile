import React, {useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import EventCard from "@/components/route/tabs/home/eventCard";
import {useCodingResources} from '@/hooks/api/useCodingResources';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import {CodingResource} from "@/services/api/types";
import {ListRenderItemInfo} from 'react-native';

const HomeScreen: React.FC = () => {
    const {resources, loading, error} = useCodingResources();
    const [favorites, setFavorites] = useState<number[]>([]);
    
    const toggleFavorite = (id: number) => {
        setFavorites((prevFavorites) =>
            prevFavorites.includes(id)
                ? prevFavorites.filter((favId) => favId !== id)
                : [...prevFavorites, id]
        );
    };

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
