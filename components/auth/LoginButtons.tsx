import React from 'react';
import {View} from 'react-native';
import LoginButton from '@/components/auth/LoginButton';

const LoginButtons: React.FC = () => {
    return (
        <View>
            <LoginButton href="/reset" text="Forgot password?"/>
            <LoginButton href="/register" text="Create Account"/>
            <LoginButton href="/TOS" text="Terms Of Service"/>
        </View>
    );
};

export default LoginButtons;