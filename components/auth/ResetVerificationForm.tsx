import React from 'react';
import {View, TextInput} from 'react-native';
import resetStyles from '@/styles/auth/resetStyles';
import PrimaryButton from '@/components/ui/PrimaryButton';

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
        </View>
    );
};

export default ResetVerificationForm;