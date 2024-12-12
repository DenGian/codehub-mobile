import React from 'react';
import {View} from 'react-native';
import PrimaryButton from '@/components/ui/PrimaryButton';
import LoginInput from "@/components/auth/LoginInput";

interface RegisterFormProps {
    emailAddress: string;
    setEmailAddress: (text: string) => void;
    username: string;
    setUsername: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    onSignUpPress: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = (
    {emailAddress, setEmailAddress, username, setUsername, password, setPassword, onSignUpPress}) => {
    return (
        <View>
            <LoginInput
                autoCapitalize="none"
                placeholderTextColor="black"
                placeholder="email@example.com"
                value={emailAddress}
                onChangeText={setEmailAddress}
            />
            <LoginInput
                placeholder="username"
                placeholderTextColor="black"
                value={username}
                onChangeText={setUsername}
            />
            <LoginInput
                placeholder="password"
                placeholderTextColor="black"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <PrimaryButton onPress={onSignUpPress} title="Sign up" color={'#6c47ff'}/>
        </View>
    );
};

export default RegisterForm;