import {TextInput, View} from 'react-native';
import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {Stack} from 'expo-router';
import registerStyles from '@/styles/auth/registerStyles';
import useRegisterForm from '@/hooks/auth/useRegisterForm';
import PrimaryButton from '@/components/ui/PrimaryButton';
import VerificationForm from '@/components/auth/VerificationForm';

const Register = () => {
    const {
        emailAddress,
        setEmailAddress,
        password,
        setPassword,
        username,
        setUsername,
        pendingVerification,
        code,
        setCode,
        loading,
        onSignUpPress,
        onPressVerify
    } = useRegisterForm();

    return (
        <View style={registerStyles.container}>
            <Stack.Screen options={{headerBackVisible: !pendingVerification}}/>
            <Spinner visible={loading}/>

            {!pendingVerification && (
                <>
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
                </>
            )}

            {pendingVerification && (
                <VerificationForm
                    code={code}
                    setCode={setCode}
                    onPressVerify={onPressVerify}
                />
            )}
        </View>
    );
};

export default Register;