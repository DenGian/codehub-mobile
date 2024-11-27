import {View} from 'react-native';
import React from 'react';
import resetStyles from '@/styles/auth/resetStyles';
import ResetForm from '@/components/auth/ResetForm';
import ResetVerificationForm from '@/components/auth/ResetVerificationForm';
import usePasswordReset from '@/hooks/auth/usePasswordReset';
import HeaderBack from '@/components/ui/HeaderBack';

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
        loading,
    } = usePasswordReset();

    return (
        <View style={resetStyles.container}>
            <HeaderBack visible={!successfulCreation}/>

            {!successfulCreation && (
                <ResetForm
                    emailAddress={emailAddress}
                    setEmailAddress={setEmailAddress}
                    onRequestReset={onRequestReset}
                    loading={loading}
                />
            )}

            {successfulCreation && (
                <ResetVerificationForm
                    code={code}
                    setCode={setCode}
                    password={password}
                    setPassword={setPassword}
                    onReset={onReset}
                    loading={loading}
                />
            )}
        </View>
    );
};

export default PwReset;