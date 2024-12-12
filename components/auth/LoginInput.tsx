import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import loginStyles from '@/styles/auth/loginStyles';

interface LoginInputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const LoginInput: React.FC<LoginInputProps> = ({placeholder, value, onChangeText, secureTextEntry = false}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={loginStyles.inputContainer}>
            {(isFocused || value) && <Text style={loginStyles.label}>{placeholder}</Text>}
            <TextInput
                autoCapitalize="none"
                placeholder={!isFocused ? placeholder : ''}
                placeholderTextColor="grey"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={loginStyles.inputField}
            />
        </View>
    );
};

export default LoginInput;
