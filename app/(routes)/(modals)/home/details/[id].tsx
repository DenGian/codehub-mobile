import React from 'react';
import {View} from 'react-native';
import {useLocalSearchParams} from 'expo-router';
import ResourceDetailsScreen from "@/screens/route/tabs/home/DetailsPage";

const ResourceDetailsPage: React.FC = () => {
    const {id} = useLocalSearchParams<{ id: string }>();

    return (
        <View style={{flex: 1}}>
            <ResourceDetailsScreen id={id}/>
        </View>
    );
};

export default ResourceDetailsPage;