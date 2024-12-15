import React from 'react';
import {View} from 'react-native';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import LoginForm from '@/components/auth/LoginForm';
import LoginButtons from '@/components/auth/LoginButtons';

interface LoginContentProps {
    loading: boolean;
    emailAddress: string;
    setEmailAddress: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    onSignInPress: () => void;
}

const LoginContent = (
    {
        loading,
        emailAddress,
        setEmailAddress,
        password,
        setPassword,
        onSignInPress
    }: LoginContentProps) => {
    return (
        <View>
            <LoadingSpinner visible={loading}/>
            <LoginForm
                emailAddress={emailAddress}
                setEmailAddress={setEmailAddress}
                password={password}
                setPassword={setPassword}
                onSignInPress={onSignInPress}
            />
            <LoginButtons/>
        </View>
    );
};

export default LoginContent;