import React from 'react';
import {Stack} from 'expo-router';

const AuthLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#6c47ff'
                },
                headerTintColor: '#fff',
                headerBackTitle: 'Back'
            }}
        >
            <Stack.Screen
                name="login"
                options={{
                    headerTitle: 'Code-Hub'
                }}
            />
            <Stack.Screen
                name="register"
                options={{
                    headerTitle: 'Create Account'
                }}
            />
            <Stack.Screen
                name="reset"
                options={{
                    headerTitle: 'Reset Password'
                }}
            />
        </Stack>
    );
};

export default AuthLayout;