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
import styles from '@/styles/routes/tabs/home/ResourceDetailsScreen';

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
            <View style={styles.errorContainer}>
                <Text style={styles.error}>Error loading resources: {error}</Text>
            </View>
        );
    if (!resource)
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.error}>Resource not found</Text>
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

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.centeredContent}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{resource.description}</Text>
                        <TouchableOpacity onPress={() => toggleFavorite(resource.id)}>
                            <Ionicons
                                name={isFavorite ? 'heart' : 'heart-outline'}
                                size={24}
                                color={isFavorite ? 'red' : 'gray'}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.details}>
                        <Text style={styles.detailText}>
                            <Text style={styles.label}>Types: </Text>
                            {resource.types.join(', ')}
                        </Text>
                        <Text style={styles.detailText}>
                            <Text style={styles.label}>Topics: </Text>
                            {resource.topics.join(', ')}
                        </Text>
                    </View>

                    <View style={styles.levels}>
                        <Text style={styles.detailText}>
                            <Text style={styles.label}>Levels: </Text>
                            {resource.levels.join(', ')}
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.sourceButton}
                        onPress={() => handleOpenURL(resource.url)}
                    >
                        <Text style={styles.buttonText}>Visit Source</Text>
                    </TouchableOpacity>
                </View>
                <BackButton/>
            </ScrollView>
        </View>
    );
};

export default ResourceDetailsScreen;