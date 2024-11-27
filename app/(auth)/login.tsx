import {Link} from 'expo-router';
import React from 'react';
import {View, Button, Pressable, Text} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import loginStyles from '@/styles/auth/loginStyles';
import useLoginForm from '@/hooks/auth/useLoginForm';
import LoginInput from '@/components/auth/LoginInput';

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

            <Link href="/reset" asChild>
                <Pressable style={loginStyles.button}>
                    <Text>Forgot password?</Text>
                </Pressable>
            </Link>
            <Link href="/register" asChild>
                <Pressable style={loginStyles.button}>
                    <Text>Create Account</Text>
                </Pressable>
            </Link>
        </View>
    );
};

export default login;