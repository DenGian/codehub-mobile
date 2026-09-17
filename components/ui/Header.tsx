import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useUser} from '@clerk/expo';
import {useProfilePicture} from '@/context/ProfilePictureContext';
import customHeaderStyles from '@/styles/ui/customHeaderStyles';

const CustomHeader: React.FC = () => {
    const {user} = useUser();
    const displayName = user?.firstName || user?.username;
    const {profilePicture} = useProfilePicture();

    return (
        <View style={customHeaderStyles.headerContainer}>
            {profilePicture ? (
                <Image source={{uri: profilePicture}} style={styles.profilePicture}/>
            ) : (
                <Text style={customHeaderStyles.headerText}>Hey, {displayName}!</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});

export default CustomHeader;
