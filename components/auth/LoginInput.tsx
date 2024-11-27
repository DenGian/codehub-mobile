import React from 'react';
import {TextInput} from 'react-native';
import loginStyles from '@/styles/auth/loginStyles';

interface LoginInputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const LoginInput: React.FC<LoginInputProps> = ({placeholder, value, onChangeText, secureTextEntry = false}) => {
    return (
        <TextInput
            autoCapitalize="none"
            placeholder={placeholder}
            placeholderTextColor="black"
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            style={loginStyles.inputField}
        />
    );
};

export default LoginInput;