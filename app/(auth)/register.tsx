import React from 'react';
import useRegisterForm from '@/hooks/auth/useRegisterForm';
import RegisterContent from '@/components/auth/RegisterContent';

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
        <RegisterContent
            emailAddress={emailAddress}
            setEmailAddress={setEmailAddress}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            pendingVerification={pendingVerification}
            code={code}
            setCode={setCode}
            loading={loading}
            onSignUpPress={onSignUpPress}
            onPressVerify={onPressVerify}
        />
    );
};

export default Register;