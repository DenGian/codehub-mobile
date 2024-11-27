import React from 'react';
import {View, Button} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import loginStyles from '@/styles/auth/loginStyles';
import useLoginForm from '@/hooks/auth/useLoginForm';
import LoginInput from '@/components/auth/LoginInput';
import LoginButton from '@/components/auth/LoginButton';

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
            <Spinner visible={loading}/>

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

            <Button onPress={onSignInPress} title="Login" color={'#6c47ff'}></Button>

            <LoginButton href="/reset" text="Forgot password?"/>
            <LoginButton href="/register" text="Create Account"/>
        </View>
    );
};

export default login;