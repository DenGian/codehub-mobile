import React from 'react';
import {View} from 'react-native';
import InputField from '@/components/ui/InputField';

interface UserInputFieldsProps {
    firstName: string;
    setFirstName: (text: string) => void;
    lastName: string;
    setLastName: (text: string) => void;
}

const UserInputFields: React.FC<UserInputFieldsProps> = ({firstName, setFirstName, lastName, setLastName}) => {
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