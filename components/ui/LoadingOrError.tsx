import React from 'react';
import {Text, View} from 'react-native';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import loadingOrErrorStyles from "@/styles/ui/loadingOrErrorStyles";

interface LoadingOrErrorProps {
    loading: boolean;
    refreshing: boolean;
    error: string | null;
}

const LoadingOrError = ({loading, refreshing, error}: LoadingOrErrorProps) => {
    if (loading && !refreshing) {
        return <LoadingSpinner visible/>;
    }

    if (error) {
        return (
            <View style={loadingOrErrorStyles.errorContainer}>
                <Text style={loadingOrErrorStyles.errorText}>{error}</Text>
            </View>
        );
    }

    return null;
};

export default LoadingOrError;