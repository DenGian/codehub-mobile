import React from 'react';
import {View, Text} from 'react-native';
import resourceDetailsStyles from '@/styles/routes/tabs/home/resourceDetailsScreenStyles';

interface ResourceDetailsProps {
    types: string[];
    topics: string[];
    levels: string[];
}

const ResourceDetails: React.FC<ResourceDetailsProps> = ({types, topics, levels}) => {
    return (
        <>
            <View style={resourceDetailsStyles.details}>
                <Text style={resourceDetailsStyles.detailText}>
                    <Text style={resourceDetailsStyles.label}>Types: </Text>
                    {types.join(', ')}
                </Text>
                <Text style={resourceDetailsStyles.detailText}>
                    <Text style={resourceDetailsStyles.label}>Topics: </Text>
                    {topics.join(', ')}
                </Text>
            </View>

            <View style={resourceDetailsStyles.levels}>
                <Text style={resourceDetailsStyles.detailText}>
                    <Text style={resourceDetailsStyles.label}>Levels: </Text>
                    {levels.join(', ')}
                </Text>
            </View>
        </>
    );
};

export default ResourceDetails;