import React from 'react';
import {View, Image, TouchableOpacity, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {Linking} from 'react-native';
import {useProfilePicture} from "@/context/ProfilePictureContext";
import profilePictureStyles from "@/styles/routes/tabs/profile/profilePictureStyles";

const ProfilePicture = () => {
    const {profilePicture, setProfilePicture} = useProfilePicture()

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
            mediaTypes: ['images'],
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
        <View style={profilePictureStyles.container}>
            <TouchableOpacity onPress={showImagePickerOptions}>
                <Image
                    source={
                        profilePicture
                            ? {uri: profilePicture}
                            : require('@/assets/images/default-profile.png')
                    }
                    style={profilePictureStyles.profilePicture}
                />
            </TouchableOpacity>
        </View>
    );
};

export default ProfilePicture;
