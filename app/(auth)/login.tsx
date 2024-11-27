import React from 'react';
import {View} from 'react-native';
import loginStyles from '@/styles/auth/loginStyles';
import useLoginForm from '@/hooks/auth/useLoginForm';
import LoginInput from '@/components/auth/LoginInput';
import LoginButton from '@/components/auth/LoginButton';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import PrimaryButton from '@/components/ui/PrimaryButton';

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

            <LoginInput
                placeholder="code@hub.dev"
                value={emailAddress}
                onChangeText={setEmailAddress}
            />
            <LoginInput
                placeholder="password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <PrimaryButton onPress={onSignInPress} title="Login"/>

            <LoginButton href="/reset" text="Forgot password?"/>
            <LoginButton href="/register" text="Create Account"/>
        </View>
    );
};

export default login;