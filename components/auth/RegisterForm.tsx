import React from 'react';
import {View, TextInput} from 'react-native';
import PrimaryButton from '@/components/ui/PrimaryButton';
import registerStyles from '@/styles/auth/registerStyles';

interface RegisterFormProps {
    emailAddress: string;
    setEmailAddress: (text: string) => void;
    username: string;
    setUsername: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    onSignUpPress: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = (
    {emailAddress, setEmailAddress, username, setUsername, password, setPassword, onSignUpPress}) => {
    return (
        <View>
            <TextInput
                autoCapitalize="none"
                placeholderTextColor="black"
                placeholder="email@example.com"
                value={emailAddress}
                onChangeText={setEmailAddress}
                style={registerStyles.inputField}
            />
            <TextInput
                placeholder="username"
                placeholderTextColor="black"
                value={username}
                onChangeText={setUsername}
                style={registerStyles.inputField}
            />
            <TextInput
                placeholder="password"
                placeholderTextColor="black"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={registerStyles.inputField}
            />
            <PrimaryButton onPress={onSignUpPress} title="Sign up"/>
        </View>
    );
};

export default RegisterForm;