import {View} from 'react-native';
import React from 'react';
import resetStyles from '@/styles/auth/resetStyles';
import usePasswordReset from '@/hooks/auth/usePasswordReset';
import HeaderBack from '@/components/ui/HeaderBack';
import ResetContent from '@/components/auth/ResetContent';

const ResetScreen = () => {
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
            <ResetContent
                emailAddress={emailAddress}
                setEmailAddress={setEmailAddress}
                code={code}
                setCode={setCode}
                password={password}
                setPassword={setPassword}
                onRequestReset={onRequestReset}
                onReset={onReset}
                successfulCreation={successfulCreation}
                loading={loading}
            />
        </View>
    );
};

export default ResetScreen;