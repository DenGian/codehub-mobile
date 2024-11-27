import {View} from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';
import resetStyles from '@/styles/auth/resetStyles';
import ResetForm from '@/components/auth/ResetForm';
import ResetVerificationForm from '@/components/auth/ResetVerificationForm';
import usePasswordReset from '@/hooks/auth/usePasswordReset';

const PwReset = () => {
    const {
        emailAddress,
        setEmailAddress,
        password,
        setPassword,
        code,
        setCode,
        successfulCreation,
        onRequestReset,
        onReset,
    } = usePasswordReset();

    return (
        <View style={resetStyles.container}>
            <Stack.Screen options={{headerBackVisible: !successfulCreation}}/>

            {!successfulCreation && (
                <ResetForm
                    emailAddress={emailAddress}
                    setEmailAddress={setEmailAddress}
                    onRequestReset={onRequestReset}
                />
            )}

            {successfulCreation && (
                <ResetVerificationForm
                    code={code}
                    setCode={setCode}
                    password={password}
                    setPassword={setPassword}
                    onReset={onReset}
                />
            )}
        </View>
    );
};

export default PwReset;