import React from 'react';
import {View} from 'react-native';
import GreetingText from '@/components/ui/GreetingText';
import UserInputFields from '@/components/ui/UserInputFields';
import PrimaryButton from '@/components/ui/PrimaryButton';
import profileStyles from '@/styles/routes/tabs/profile/profileStyles';

interface ProfileContentProps {
    firstName: string;
    setFirstName: (text: string) => void;
    lastName: string;
    setLastName: (text: string) => void;
    loading: boolean;
    onSaveUser: () => void;
}

const ProfileContent: React.FC<ProfileContentProps> = (
    {firstName, setFirstName, lastName, setLastName, loading, onSaveUser}) => {
    return (
        <View style={profileStyles.container}>
            <GreetingText firstName={firstName} lastName={lastName}/>
            <UserInputFields
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
            />
            <PrimaryButton onPress={onSaveUser} title="Update account" color="#6c47ff" loading={loading}/>
        </View>
    );
};

export default ProfileContent;