import React from 'react';
import {View} from 'react-native';
import loginStyles from '@/styles/auth/loginStyles';
import useLoginForm from '@/hooks/auth/useLoginForm';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import LoginForm from '@/components/auth/LoginForm';
import LoginButtons from '@/components/auth/LoginButtons';

const login = () => {
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

export default login;