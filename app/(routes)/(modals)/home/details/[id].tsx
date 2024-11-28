import React from 'react';
import {useLocalSearchParams, useRouter} from 'expo-router';
import {Button, View} from 'react-native';
import ResourceDetailsScreen from "@/screens/details";

const ResourceDetailsPage: React.FC = () => {
    const {id} = useLocalSearchParams<{ id: string }>();  // Get the dynamic parameter
    const router = useRouter();

    return (
        <View style={{flex: 1}}>
            <Button title="Back" onPress={() => router.back()}/>
            <ResourceDetailsScreen id={id}/> {/* Pass the id parameter correctly */}
        </View>
    );
};

export default ResourceDetailsPage;