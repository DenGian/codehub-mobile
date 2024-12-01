import React from 'react';
import {View} from 'react-native';
import RegisterScreen from '@/screens/auth/RegisterPage';

const RegisterPage: React.FC = () => {
    return (
        <View style={{flex: 1}}>
            <RegisterScreen/>
        </View>
    );
};

export default RegisterPage;