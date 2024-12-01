import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '@/screens/auth/LoginPage';
import RegisterPage from '@/screens/auth/RegisterPage';
import ResetPage from '@/screens/auth/ResetPage';

const Stack = createNativeStackNavigator();

const AuthPages = () => {
    return (
        <Stack.Navigator
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
                component={LoginPage}
                options={{
                    headerTitle: 'Code-Hub'
                }}
            />
            <Stack.Screen
                name="register"
                component={RegisterPage}
                options={{
                    headerTitle: 'Create Account'
                }}
            />
            <Stack.Screen
                name="reset"
                component={ResetPage}
                options={{
                    headerTitle: 'Reset Password'
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthPages;