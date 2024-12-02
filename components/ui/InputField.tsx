import React from 'react';
import {TextInput} from 'react-native';
import inputFieldStyles from '@/styles/ui/inputFieldStyles';

interface InputFieldProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({placeholder, value, onChangeText}) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor="black"
            value={value}
            onChangeText={onChangeText}
            style={inputFieldStyles.inputField}
        />
    );
};

export default InputField;