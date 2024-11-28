import React from 'react';
import {View, Text} from 'react-native';
import {useUser} from '@clerk/clerk-expo';
import customHeaderStyles from '@/styles/ui/customHeaderStyles';

const CustomHeader: React.FC = () => {
    const {user} = useUser();
    const displayName = user?.firstName || user?.username;

    return (
        <View style={customHeaderStyles.headerContainer}>
            <Text style={customHeaderStyles.headerText}>Hey, {displayName}!</Text>
        </View>
    );
};

export default CustomHeader;