import React from 'react';
import {View} from 'react-native';
import InputField from '@/components/ui/InputField';

interface UserInputFieldsProps {
    firstName: string;
    setFirstName: (text: string) => void;
    lastName: string;
    setLastName: (text: string) => void;
}

const UserInputFields = ({firstName, setFirstName, lastName, setLastName}: UserInputFieldsProps) => {
    return (
        <View>
            <InputField
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />
            <InputField
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
            />
        </View>
    );
};

export default UserInputFields;