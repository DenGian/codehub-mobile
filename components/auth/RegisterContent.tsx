import React from 'react';
import {View} from 'react-native';
import registerStyles from '@/styles/auth/registerStyles';
import VerificationForm from '@/components/auth/VerificationForm';
import RegisterForm from '@/components/auth/RegisterForm';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import HeaderBack from '@/components/ui/HeaderBack';

interface RegisterContentProps {
    emailAddress: string;
    setEmailAddress: (text: string) => void;
    username: string;
    setUsername: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    pendingVerification: boolean;
    code: string;
    setCode: (text: string) => void;
    loading: boolean;
    onSignUpPress: () => void;
    onPressVerify: () => void;
}

const RegisterContent: React.FC<RegisterContentProps> = (
    {
        emailAddress,
        setEmailAddress,
        username,
        setUsername,
        password,
        setPassword,
        pendingVerification,
        code,
        setCode,
        loading,
        onSignUpPress,
        onPressVerify
    }) => {
    return (
        <View style={registerStyles.container}>
            <HeaderBack visible={!pendingVerification}/>
            <LoadingSpinner visible={loading}/>

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

export default RegisterContent;