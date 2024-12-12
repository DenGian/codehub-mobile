import React from 'react';
import {View} from 'react-native';
import PrimaryButton from '@/components/ui/PrimaryButton';
import LoginInput from "@/components/auth/LoginInput";

interface ResetContentProps {
    emailAddress: string;
    setEmailAddress: (text: string) => void;
    code: string;
    setCode: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    onRequestReset: () => void;
    onReset: () => void;
    successfulCreation: boolean;
    loading: boolean;
}

const ResetContent: React.FC<ResetContentProps> = (
    {
        emailAddress,
        setEmailAddress,
        code,
        setCode,
        password,
        setPassword,
        onRequestReset,
        onReset,
        successfulCreation,
        loading,
    }) => {
    return (
        <View>
            {!successfulCreation ? (
                <>
                    <LoginInput
                        autoCapitalize="none"
                        placeholder="E-Mail"
                        placeholderTextColor="black"
                        value={emailAddress}
                        onChangeText={setEmailAddress}
                    />
                    <PrimaryButton
                        onPress={onRequestReset}
                        title="Send Reset Email"
                        color={'#6c47ff'}
                        loading={loading}/>
                </>
            ) : (
                <>
                    <LoginInput
                        value={code}
                        placeholder="Code..."
                        placeholderTextColor="black"
                        onChangeText={setCode}
                    />
                    <LoginInput
                        placeholder="New password"
                        placeholderTextColor="black"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <PrimaryButton onPress={onReset} title="Set new Password" color={'#6c47ff'} loading={loading}/>
                </>
            )}
        </View>
    );
};

export default ResetContent;