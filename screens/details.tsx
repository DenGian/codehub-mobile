import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ErrorMessage from '@/components/ui/ErrorMessage';
import BackButton from '@/components/ui/BackButton';
import resourceDetailsStyles from '@/styles/routes/tabs/home/ResourceDetailsScreen';
import useDetailResource from "@/hooks/api/useDetailResource";
import ResourceHeaderSection from "@/components/route/tabs/home/ResourceHeaderSection";
import ResourceDetailsSection from "@/components/route/tabs/home/ResourceDetailsSection";
import ResourceMapSection from "@/components/route/tabs/home/ResourseMapSection";
import VisitSourceButton from '@/components/route/tabs/home/VisitSourceButton';

interface ResourceDetailsScreenProps {
    id: string;
}

const ResourceDetailsScreen: React.FC<ResourceDetailsScreenProps> = ({id}) => {
    const {resource, loading, error} = useDetailResource(id);

    if (loading || !resource) return <LoadingSpinner visible={true}/>;
    if (error) return <ErrorMessage message={`Error loading resources: ${error}`}/>;
    if (!resource) return <ErrorMessage message="Resource not found"/>;

    const hasEventMetadata = resource.metaData && resource.metaData.date && resource.metaData.location;

    return (
        <View style={resourceDetailsStyles.container}>
            <ScrollView contentContainerStyle={resourceDetailsStyles.centeredContent}>
                <View style={resourceDetailsStyles.card}>
                    <ResourceHeaderSection resource={resource}/>

                    <ResourceDetailsSection resource={resource}/>

                    {hasEventMetadata && resource.metaData && (
                        <ResourceMapSection metaData={resource.metaData}/>
                    )}

                    <VisitSourceButton url={resource.url}/>

                </View>
                <BackButton/>
            </ScrollView>
        </View>
    );
};

export default ResourceDetailsScreen;