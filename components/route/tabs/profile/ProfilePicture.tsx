import React, {useState} from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {Linking} from 'react-native';

const ProfilePicture = () => {
    const [profilePicture, setProfilePicture] = useState<string | null>(null);

    const showImagePickerOptions = () => {
        Alert.alert(
            "Profile Picture",
            "Choose an option",
            [
                {
                    text: "Use from Library",
                    onPress: pickImageFromLibrary,
                },
                {
                    text: "Take a Photo",
                    onPress: takePhoto,
                },
                {
                    text: "Cancel",
                    style: "cancel",
                },
            ],
            {cancelable: true}
        );
    };

    const pickImageFromLibrary = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert(
                'Permission Required',
                'Permission to access the library is required. Please enable it in the app settings.',
                [
                    {text: 'Cancel', style: 'cancel'},
                    {text: 'Open Settings', onPress: () => Linking.openSettings()},
                ],
                {cancelable: true}
            );
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setProfilePicture(result.assets[0].uri);
        }
    };

    const takePhoto = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert(
                'Permission Required',
                'Permission to access the camera is required. Please enable it in the app settings.',
                [
                    {text: 'Cancel', style: 'cancel'},
                    {text: 'Open Settings', onPress: () => Linking.openSettings()},
                ],
                {cancelable: true}
            );
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setProfilePicture(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={showImagePickerOptions}>
                <Image
                    source={
                        profilePicture
                            ? {uri: profilePicture}
                            : require('@/assets/images/default-profile.png')
                    }
                    style={styles.profilePicture}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    profilePicture: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 1,
        borderColor: '#6c47ff',
    },
});

export default ProfilePicture;
