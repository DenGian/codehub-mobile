import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {useCodingResources} from "@/hooks/api/useCodingResources";
import {CodingResource} from "@/services/api/types"; // Import the type for type checking

const HomeScreen: React.FC = () => {
    const {resources, loading, error} = useCodingResources();

    // Handle loading state
    if (loading) {
        return <Text>Loading...</Text>;
    }

    // Handle error state
    if (error) {
        return <Text>Error: {error}</Text>;
    }

    // Render individual coding resource items
    const renderItem = ({item}: { item: CodingResource }) => (
        <View style={{marginBottom: 10, padding: 10, borderWidth: 1, borderColor: 'gray'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.description}</Text>
            <Text>Types: {item.types.join(', ')}</Text>
            <Text>Topics: {item.topics.join(', ')}</Text>
            <Text>Levels: {item.levels.join(', ')}</Text>
            <Text style={{color: 'blue'}}>{item.url}</Text>
        </View>
    );

    return (
        <View style={{flex: 1, padding: 16}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 20}}>Coding Resources</Text>
            <FlatList
                data={resources}  // Use the fetched resources array
                renderItem={renderItem}  // Render each resource as a simple view
                keyExtractor={(item) => item.id.toString()}  // Unique key for each item
            />
        </View>
    );
};

export default HomeScreen;
