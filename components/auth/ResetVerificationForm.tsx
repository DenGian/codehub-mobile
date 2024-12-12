import React from 'react';
import {View} from 'react-native';
import PrimaryButton from '@/components/ui/PrimaryButton';
import LoginInput from "@/components/auth/LoginInput";

interface ResetVerificationFormProps {
    code: string;
    setCode: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    onReset: () => void;
    loading: boolean;
}

const ResetVerificationForm: React.FC<ResetVerificationFormProps> = (
    {code, setCode, password, setPassword, onReset, loading}) => {
    return (
        <View>
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
            <PrimaryButton onPress={onReset} title="Set new Password" color={'#007FFF'} loading={loading}/>
        </View>
    );
};

export default ResetVerificationForm;