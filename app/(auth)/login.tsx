import React from 'react';
import {View} from 'react-native';
import LoginScreen from '@/screens/auth/LoginPage';

const LoginPage: React.FC = () => {
    return (
        <View style={{flex: 1}}>
            <LoginScreen/>
        </View>
    );
};

export default LoginPage;