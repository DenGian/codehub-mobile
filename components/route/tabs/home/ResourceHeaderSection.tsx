// components/ui/ResourceHeaderSection.tsx
import React from 'react';
import {View} from 'react-native';
import ResourceHeader from "@/components/route/tabs/home/ResourceHeader";
import {CodingResource} from '@/services/api/types';
import {useFavorites} from '@/hooks/storage/useFavorites';

interface ResourceHeaderSectionProps {
    resource: CodingResource;
}

const ResourceHeaderSection: React.FC<ResourceHeaderSectionProps> = ({resource}) => {
    const {favorites, toggleFavorite} = useFavorites();
    const isFavorite = favorites.includes(resource.id);

    return (
        <View>
            <ResourceHeader
                title={resource.description}
                isFavorite={isFavorite}
                onToggleFavorite={() => toggleFavorite(resource.id)}
            />
        </View>
    );
};

export default ResourceHeaderSection;