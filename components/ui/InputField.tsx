import React from 'react';
import {TextInput, KeyboardTypeOptions} from 'react-native';
import inputFieldStyles from '@/styles/ui/inputFieldStyles';

interface InputFieldProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: KeyboardTypeOptions;
}

const InputField: React.FC<InputFieldProps> = ({placeholder, value, onChangeText, keyboardType}) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor="black"
            value={value}
            onChangeText={onChangeText}
            style={inputFieldStyles.inputField}
            keyboardType={keyboardType}
        />
    );
};

export default InputField;
