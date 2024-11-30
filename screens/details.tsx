import React from 'react';
import {View} from 'react-native';
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ErrorMessage from '@/components/ui/ErrorMessage';
import resourceDetailsStyles from '@/styles/routes/tabs/home/resourceDetailsScreenStyles';
import useDetailResource from "@/hooks/api/useDetailResource";
import ResourceDetailContent from '@/components/route/tabs/home/ResourceDetailContent';

interface ResourceDetailsScreenProps {
    id: string;
}

const ResourceDetailsScreen: React.FC<ResourceDetailsScreenProps> = ({id}) => {
    const {resource, loading, error} = useDetailResource(id);

    if (loading || !resource) return <LoadingSpinner visible={true}/>;
    if (error) return <ErrorMessage message={`Error loading resources: ${error}`}/>;
    if (!resource) return <ErrorMessage message="Resource not found"/>;

    const hasEventMetadata = !!(resource.metaData && resource.metaData.date && resource.metaData.location);

    return (
        <View style={resourceDetailsStyles.container}>
            <ResourceDetailContent resource={resource} hasEventMetadata={hasEventMetadata}/>
        </View>
    );
};

export default ResourceDetailsScreen;