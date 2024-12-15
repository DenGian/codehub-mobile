import React from 'react';
import {CodingResource} from '@/services/api/types';
import EventCard from '@/components/route/tabs/home/EventCard';
import {useRouter} from 'expo-router';
import {useFavorites} from '@/hooks/storage/useFavorites';

interface RenderItemProps {
    item: CodingResource;
}

const HomeScreenRenderItem = ({item}: RenderItemProps) => {
    const router = useRouter();
    const {favorites, toggleFavorite} = useFavorites();
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

export default HomeScreenRenderItem;