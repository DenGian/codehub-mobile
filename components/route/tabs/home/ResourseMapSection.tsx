import React from 'react';
import {View} from 'react-native';
import ResourceMap from '@/components/ui/ResourceMap';
import {MetaData} from '@/services/api/types';

interface ResourceMapSectionProps {
    metaData: MetaData;
}

const ResourceMapSection: React.FC<ResourceMapSectionProps> = ({metaData}) => {
    return (
        <View>
            <ResourceMap
                date={metaData.date || ''}
                location={metaData.location || {lat: 0, long: 0}}
            />
        </View>
    );
};

export default ResourceMapSection;