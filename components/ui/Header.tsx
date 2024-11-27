import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useUser} from '@clerk/clerk-expo';

const CustomHeader: React.FC = () => {
    const {user} = useUser();
    const displayName = user?.firstName || user?.username;

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Welcome, {displayName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        backgroundColor: '#6c47ff',
    },
    headerText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default CustomHeader;