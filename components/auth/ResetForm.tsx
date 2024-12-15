import React from 'react';
import {View} from 'react-native';
import PrimaryButton from '@/components/ui/PrimaryButton';
import LoginInput from "@/components/auth/LoginInput";

interface ResetFormProps {
    emailAddress: string;
    setEmailAddress: (text: string) => void;
    onRequestReset: () => void;
    loading: boolean;
}

const ResetForm = ({emailAddress, setEmailAddress, onRequestReset, loading}: ResetFormProps) => {
    return (
        <View>
            <LoginInput
                autoCapitalize="none"
                placeholder="E-Mail"
                placeholderTextColor="black"
                value={emailAddress}
                onChangeText={setEmailAddress}
                keyboardType="email-address"
            />
            <PrimaryButton onPress={onRequestReset} title="Send Reset Email" color={'#007FFF'} loading={loading}/>
        </View>
    );
};

export default ResetForm;