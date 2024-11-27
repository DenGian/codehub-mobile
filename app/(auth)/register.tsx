import {View} from 'react-native';
import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {Stack} from 'expo-router';
import registerStyles from '@/styles/auth/registerStyles';
import useRegisterForm from '@/hooks/auth/useRegisterForm';
import VerificationForm from '@/components/auth/VerificationForm';
import RegisterForm from '@/components/auth/RegisterForm';

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
                <RegisterForm
                    emailAddress={emailAddress}
                    setEmailAddress={setEmailAddress}
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    onSignUpPress={onSignUpPress}
                />
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