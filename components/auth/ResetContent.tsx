import React from 'react';
import {View, TextInput} from 'react-native';
import resetStyles from '@/styles/auth/resetStyles';
import PrimaryButton from '@/components/ui/PrimaryButton';

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
                    <TextInput
                        autoCapitalize="none"
                        placeholder="code@hub.dev"
                        placeholderTextColor="black"
                        value={emailAddress}
                        onChangeText={setEmailAddress}
                        style={resetStyles.inputField}
                    />
                    <PrimaryButton
                        onPress={onRequestReset}
                        title="Send Reset Email"
                        color={'#6c47ff'}
                        loading={loading}/>
                </>
            ) : (
                <>
                    <TextInput
                        value={code}
                        placeholder="Code..."
                        placeholderTextColor="black"
                        style={resetStyles.inputField}
                        onChangeText={setCode}
                    />
                    <TextInput
                        placeholder="New password"
                        placeholderTextColor="black"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={resetStyles.inputField}
                    />
                    <PrimaryButton onPress={onReset} title="Set new Password" color={'#6c47ff'} loading={loading}/>
                </>
            )}
        </View>
    );
};

export default ResetContent;