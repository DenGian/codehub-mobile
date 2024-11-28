// screens/details.tsx
import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useCodingResources} from '@/hooks/api/useCodingResources';
import {useFavorites} from '@/hooks/storage/useFavorites';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import {CodingResource} from '@/services/api/types';
import BackButton from '@/components/ui/BackButton';
import resourceDetailsStyles from '@/styles/routes/tabs/home/ResourceDetailsScreen';
import MapView, {Marker} from 'react-native-maps';
import mapStyles from "@/styles/routes/tabs/home/mapStyles";
import {handleOpenURL} from '@/utils/urlUtils';
import ResourceHeader from '@/components/ui/ResourceHeader';
import ResourceDetails from '@/components/ui/ResourceDetails';

interface ResourceDetailsScreenProps {
    id: string;
}

const ResourceDetailsScreen: React.FC<ResourceDetailsScreenProps> = ({id}) => {
    const {resources, loading, error} = useCodingResources();
    const {favorites, toggleFavorite} = useFavorites();

    const [resource, setResource] = useState<CodingResource | null>(null);

    useEffect(() => {
        if (Array.isArray(resources) && resources.length > 0) {
            const foundResource = resources.find((res) => res.id.toString() === id);
            setResource(foundResource || null);
        }
    }, [resources, id]);

    if (loading || !resources) return <LoadingSpinner visible={true}/>;
    if (error)
        return (
            <View style={resourceDetailsStyles.errorContainer}>
                <Text style={resourceDetailsStyles.error}>Error loading resources: {error}</Text>
            </View>
        );
    if (!resource)
        return (
            <View style={resourceDetailsStyles.errorContainer}>
                <Text style={resourceDetailsStyles.error}>Resource not found</Text>
            </View>
        );

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
                        <>
                            <Text style={resourceDetailsStyles.detailText}>
                                <Text style={resourceDetailsStyles.label}>Date: </Text>
                                {resource?.metaData?.date}
                            </Text>

                            <MapView
                                style={mapStyles.map}
                                initialRegion={{
                                    latitude: resource?.metaData?.location?.lat || 0,
                                    longitude: resource?.metaData?.location?.long || 0,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: resource?.metaData?.location?.lat || 0,
                                        longitude: resource?.metaData?.location?.long || 0,
                                    }}
                                    title="Event Location"
                                />
                            </MapView>
                        </>
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