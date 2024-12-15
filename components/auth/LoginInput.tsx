import React, {useState} from 'react';
import {TextInput, View, Text, ViewStyle, KeyboardTypeOptions} from 'react-native';
import loginStyles from '@/styles/auth/loginStyles';

interface LoginInputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    placeholderTextColor?: string;
    style?: ViewStyle;
    keyboardType?: KeyboardTypeOptions;
}

const LoginInput = (
    {
        placeholder,
        value,
        onChangeText,
        secureTextEntry = false,
        autoCapitalize = 'none',
        placeholderTextColor = 'grey',
        style,
        keyboardType = 'default'
    }: LoginInputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={[loginStyles.inputContainer, style]}>
            {(isFocused || value) && <Text style={loginStyles.label}>{placeholder}</Text>}
            <TextInput
                autoCapitalize={autoCapitalize}
                placeholder={!isFocused ? placeholder : ''}
                placeholderTextColor={placeholderTextColor}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={loginStyles.inputField}
                keyboardType={keyboardType}
            />
        </View>
    );
};

export default LoginInput;