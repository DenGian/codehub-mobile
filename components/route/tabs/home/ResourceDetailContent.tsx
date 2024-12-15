import React from 'react';
import {View, ScrollView} from 'react-native';
import ResourceHeaderSection from '@/components/route/tabs/home/ResourceHeaderSection';
import ResourceDetailsSection from '@/components/route/tabs/home/ResourceDetailsSection';
import ResourceMapSection from "@/components/route/tabs/home/ResourseMapSection";
import BackButton from "@/components/ui/BackButton";
import VisitSourceButton from '@/components/route/tabs/home/VisitSourceButton';
import resourceDetailsStyles from '@/styles/routes/tabs/home/resourceDetailsScreenStyles';
import {CodingResource} from '@/services/api/types';

interface ResourceDetailContentProps {
    resource: CodingResource;
    hasEventMetadata: boolean;
}

const ResourceDetailContent = ({resource, hasEventMetadata}: ResourceDetailContentProps) => {
    return (
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
    );
};

export default ResourceDetailContent;