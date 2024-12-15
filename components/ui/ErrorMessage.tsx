import React from 'react';
import {View, Text} from 'react-native';
import resourceDetailsStyles from '@/styles/routes/tabs/home/resourceDetailsScreenStyles';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage = ({message}: ErrorMessageProps) => {
    return (
        <View style={resourceDetailsStyles.errorContainer}>
            <Text style={resourceDetailsStyles.error}>{message}</Text>
        </View>
    );
};

export default ErrorMessage;