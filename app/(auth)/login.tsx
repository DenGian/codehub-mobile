import {Link} from 'expo-router';
import React from 'react';
import {View, TextInput, Button, Pressable, Text} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import loginStyles from '@/styles/auth/loginStyles';
import useLoginForm from '@/hooks/auth/useLoginForm';

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

            <TextInput
                autoCapitalize="none"
                placeholder="code@hub.dev"
                placeholderTextColor="black"
                value={emailAddress}
                onChangeText={setEmailAddress}
                style={loginStyles.inputField}
            />
            <TextInput
                placeholder="password"
                placeholderTextColor="black"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={loginStyles.inputField}
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