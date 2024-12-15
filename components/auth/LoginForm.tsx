import React from 'react';
import {View} from 'react-native';
import LoginInput from '@/components/auth/LoginInput';
import PrimaryButton from '@/components/ui/PrimaryButton';

interface LoginFormProps {
    emailAddress: string;
    setEmailAddress: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    onSignInPress: () => void;
}

const LoginForm = (
    {
        emailAddress,
        setEmailAddress,
        password,
        setPassword,
        onSignInPress
    }: LoginFormProps) => {
    return (
        <View>
            <LoginInput
                placeholder="E-Mail"
                value={emailAddress}
                onChangeText={setEmailAddress}
                placeholderTextColor="black"
                keyboardType="email-address"
            />
            <LoginInput
                placeholder="password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="black"
            />
            <PrimaryButton onPress={onSignInPress} title="Login" color={'#007FFF'}/>
        </View>
    );
};

export default LoginForm;