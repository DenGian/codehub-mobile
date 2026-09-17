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

const RegisterForm = (
    {
        emailAddress,
        setEmailAddress,
        username,
        setUsername,
        password,
        setPassword,
        onSignUpPress
    }: RegisterFormProps) => {
    return (
        <View>
            <LoginInput
                autoCapitalize="none"
                placeholderTextColor="black"
                placeholder="E-Mail"
                value={emailAddress}
                onChangeText={setEmailAddress}
                keyboardType="email-address"
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
            <View nativeID="clerk-captcha"/>
            <PrimaryButton onPress={onSignUpPress} title="Sign up" color={'#007FFF'}/>
        </View>
    );
};

export default RegisterForm;
