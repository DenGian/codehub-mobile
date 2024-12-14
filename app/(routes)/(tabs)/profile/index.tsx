import React from 'react';
import {View} from 'react-native';
import ProfileScreen from "@/screens/route/tabs/profile/ProfilePage";

const ProfilePage: React.FC = () => {
    return (
        <View style={{flex: 1}}>
            <ProfileScreen/>
        </View>
    );
};

export default ProfilePage;