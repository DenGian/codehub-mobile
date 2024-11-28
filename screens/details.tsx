import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {useLocalSearchParams} from 'expo-router';
import {useCodingResources} from '@/hooks/api/useCodingResources';
import {useFavorites} from '@/hooks/storage/useFavorites';
import {Ionicons} from '@expo/vector-icons';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import {CodingResource} from '@/services/api/types';
import BackButton from "@/components/ui/BackButton";

interface ResourceDetailsScreenProps {
    id: string;
}

const ResourceDetailsScreen: React.FC<ResourceDetailsScreenProps> = ({id}) => {
    const {resources, loading, error} = useCodingResources();
    const {favorites, toggleFavorite} = useFavorites();

    // State to store the specific resource
    const [resource, setResource] = useState<CodingResource | null>(null);

    // Effect to find the resource when resources change
    useEffect(() => {
        if (Array.isArray(resources) && resources.length > 0) {
            const foundResource = resources.find(res => res.id.toString() === id);
            setResource(foundResource || null);
        }
    }, [resources, id]);

    // Loading and error handling
    if (loading || !resources) return <LoadingSpinner visible={true}/>;
    if (error) return <Text>Error loading resources: {error}</Text>;
    if (!resource) return <Text>Resource not found</Text>;

    const isFavorite = favorites.includes(resource.id);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{resource.description}</Text>
                <TouchableOpacity onPress={() => toggleFavorite(resource.id)}>
                    <Ionicons
                        name={isFavorite ? "heart" : "heart-outline"}
                        size={24}
                        color={isFavorite ? "red" : "gray"}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Types</Text>
                <Text>{resource.types.join(', ')}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Topics</Text>
                <Text>{resource.topics.join(', ')}</Text>
            </View>
            <BackButton/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        marginRight: 10
    },
    section: {
        marginBottom: 16,
        padding: 12,
        backgroundColor: '#f4f4f4',
        borderRadius: 8
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8
    }
});

export default ResourceDetailsScreen;