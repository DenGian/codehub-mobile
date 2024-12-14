import React from 'react';
import {View} from 'react-native';
import useUpdateUser from '@/hooks/route/tabs/profile/useUpdateUser';
import ProfileContent from "@/components/route/tabs/profile/ProfileContent";

const ProfileScreen = () => {
    const {firstName, setFirstName, lastName, setLastName, loading, onSaveUser} = useUpdateUser();

    return (
        <View>
            <ProfileContent
                firstName={firstName || ''}
                setFirstName={setFirstName}
                lastName={lastName || ''}
                setLastName={setLastName}
                loading={loading}
                onSaveUser={onSaveUser}
            />
        </View>
    );
};

export default ProfileScreen;