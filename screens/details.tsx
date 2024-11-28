// screens/details.tsx
import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useFavorites} from '@/hooks/storage/useFavorites';
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ErrorMessage from '@/components/ui/ErrorMessage';
import BackButton from '@/components/ui/BackButton';
import resourceDetailsStyles from '@/styles/routes/tabs/home/ResourceDetailsScreen';
import {handleOpenURL} from '@/utils/urlUtils';
import ResourceHeader from '@/components/ui/ResourceHeader';
import ResourceDetails from '@/components/ui/ResourceDetails';
import ResourceMap from '@/components/ui/ResourceMap';
import useDetailResource from "@/hooks/api/useDetailResource";

interface ResourceDetailsScreenProps {
    id: string;
}

const ResourceDetailsScreen: React.FC<ResourceDetailsScreenProps> = ({id}) => {
    const {resource, loading, error} = useDetailResource(id);
    const {favorites, toggleFavorite} = useFavorites();

    if (loading || !resource) return <LoadingSpinner visible={true}/>;
    if (error) return <ErrorMessage message={`Error loading resources: ${error}`}/>;
    if (!resource) return <ErrorMessage message="Resource not found"/>;

    const isFavorite = favorites.includes(resource.id);
    const hasEventMetadata = resource.metaData && resource.metaData.date && resource.metaData.location;

    return (
        <View style={resourceDetailsStyles.container}>
            <ScrollView contentContainerStyle={resourceDetailsStyles.centeredContent}>
                <View style={resourceDetailsStyles.card}>
                    <ResourceHeader
                        title={resource.description}
                        isFavorite={isFavorite}
                        onToggleFavorite={() => toggleFavorite(resource.id)}
                    />

                    <ResourceDetails
                        types={resource.types}
                        topics={resource.topics}
                        levels={resource.levels}
                    />

                    {hasEventMetadata && (
                        <ResourceMap
                            date={resource.metaData?.date || ''}
                            location={resource.metaData?.location || {lat: 0, long: 0}}
                        />
                    )}

                    <TouchableOpacity
                        style={resourceDetailsStyles.sourceButton}
                        onPress={() => handleOpenURL(resource.url)}
                    >
                        <Text style={resourceDetailsStyles.buttonText}>Visit Source</Text>
                    </TouchableOpacity>
                </View>
                <BackButton/>
            </ScrollView>
        </View>
    );
};

export default ResourceDetailsScreen;