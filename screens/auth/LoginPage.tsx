import React from 'react';
import {View} from 'react-native';
import loginStyles from '@/styles/auth/loginStyles';
import useLoginForm from '@/hooks/auth/useLoginForm';
import LoginContent from '@/components/auth/LoginContent';

const LoginScreen = () => {
    const {
        emailAddress,
        setEmailAddress,
        password,
        setPassword,
        loading,
        onSignInPress
    } = useLoginForm();

    return (
        <View style={loginStyles.container}>
            <LoginContent
                loading={loading}
                emailAddress={emailAddress}
                setEmailAddress={setEmailAddress}
                password={password}
                setPassword={setPassword}
                onSignInPress={onSignInPress}
            />
        </View>
    );
};

export default LoginScreen;