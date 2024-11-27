import {View} from 'react-native';
import React, {useState} from 'react';
import {Stack} from 'expo-router';
import {useSignIn} from '@clerk/clerk-expo';
import resetStyles from '@/styles/auth/resetStyles';
import ResetForm from '@/components/auth/ResetForm';
import ResetVerificationForm from '@/components/auth/ResetVerificationForm';

const PwReset = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const [successfulCreation, setSuccessfulCreation] = useState(false);
    const {signIn, setActive} = useSignIn();

    const onRequestReset = async () => {
        try {
            await signIn!.create({
                strategy: 'reset_password_email_code',
                identifier: emailAddress,
            });
            setSuccessfulCreation(true);
        } catch (err: any) {
            alert(err.errors[0].message);
        }
    };

    const onReset = async () => {
        try {
            const result = await signIn!.attemptFirstFactor({
                strategy: 'reset_password_email_code',
                code,
                password,
            });
            console.log(result);
            alert('Password reset successfully');
            await setActive!({session: result.createdSessionId});
        } catch (err: any) {
            alert(err.errors[0].message);
        }
    };

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