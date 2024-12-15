import React from 'react';
import {View} from 'react-native';
import ResourceDetails from '@/components/route/tabs/home/ResourceDetails';
import {CodingResource} from '@/services/api/types';

interface ResourceDetailsSectionProps {
    resource: CodingResource;
}

const ResourceDetailsSection = ({resource}: ResourceDetailsSectionProps) => {
    return (
        <View>
            <ResourceDetails
                types={resource.types}
                topics={resource.topics}
                levels={resource.levels}
            />
        </View>
    );
};

export default ResourceDetailsSection;