import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Linking,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useCodingResources} from '@/hooks/api/useCodingResources';
import {useFavorites} from '@/hooks/storage/useFavorites';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import {CodingResource} from '@/services/api/types';
import BackButton from '@/components/ui/BackButton';
import resourceDetailsStyles from '@/styles/routes/tabs/home/ResourceDetailsScreen';
import MapView, {Marker} from 'react-native-maps';
import mapStyles from "@/styles/routes/tabs/home/mapStyles";

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

    const handleOpenURL = async (url: string) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            alert('URL not supported');
        }
    };

    const hasEventMetadata = resource.metaData && resource.metaData.date && resource.metaData.location;

    return (
        <View style={resourceDetailsStyles.container}>
            <ScrollView contentContainerStyle={resourceDetailsStyles.centeredContent}>
                <View style={resourceDetailsStyles.card}>
                    <View style={resourceDetailsStyles.header}>
                        <Text style={resourceDetailsStyles.title}>{resource.description}</Text>
                        <TouchableOpacity onPress={() => toggleFavorite(resource.id)}>
                            <Ionicons
                                name={isFavorite ? 'heart' : 'heart-outline'}
                                size={24}
                                color={isFavorite ? 'red' : 'gray'}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={resourceDetailsStyles.details}>
                        <Text style={resourceDetailsStyles.detailText}>
                            <Text style={resourceDetailsStyles.label}>Types: </Text>
                            {resource.types.join(', ')}
                        </Text>
                        <Text style={resourceDetailsStyles.detailText}>
                            <Text style={resourceDetailsStyles.label}>Topics: </Text>
                            {resource.topics.join(', ')}
                        </Text>
                    </View>

                    <View style={resourceDetailsStyles.levels}>
                        <Text style={resourceDetailsStyles.detailText}>
                            <Text style={resourceDetailsStyles.label}>Levels: </Text>
                            {resource.levels.join(', ')}
                        </Text>
                    </View>

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
