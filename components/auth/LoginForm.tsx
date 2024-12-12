import React from 'react';
import {View} from 'react-native';
import LoginInput from '@/components/auth/LoginInput';
import PrimaryButton from '@/components/ui/PrimaryButton';

interface LoginFormProps {
    emailAddress: string;
    setEmailAddress: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    onSignInPress: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({emailAddress, setEmailAddress, password, setPassword, onSignInPress}) => {
    return (
        <View>
            <LoginInput
                placeholder="E-Mail"
                value={emailAddress}
                onChangeText={setEmailAddress}
                placeholderTextColor="black"
            />
            <LoginInput
                placeholder="password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="black"
            />
            <PrimaryButton onPress={onSignInPress} title="Login" color={'#6c47ff'}/>
        </View>
    );
};

export default LoginForm;