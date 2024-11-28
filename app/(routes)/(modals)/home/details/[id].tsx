import React from 'react';
import {View} from 'react-native';
import {useLocalSearchParams} from 'expo-router';
import ResourceDetailsScreen from "@/screens/details";

const ResourceDetailsPage: React.FC = () => {
    const {id} = useLocalSearchParams<{ id: string }>();  // Get the dynamic parameter

    return (
        <View style={{flex: 1}}>
            <ResourceDetailsScreen id={id}/> {/* Pass the id parameter correctly */}
        </View>
    );
};

export default ResourceDetailsPage;