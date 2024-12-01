import React from 'react';
import {View} from 'react-native';
import AuthPages from '@/screens/auth/AuthPages';

const AuthLayout = () => {
    return (
        <View style={{flex: 1}}>
            <AuthPages/>
        </View>
    );
};

export default AuthLayout;