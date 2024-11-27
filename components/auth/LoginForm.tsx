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
            <PrimaryButton onPress={onSignInPress} title="Login"/>
        </View>
    );
};

export default LoginForm;