import React from 'react';
import {View} from 'react-native';
import PrimaryButton from '@/components/ui/PrimaryButton';
import LoginInput from "@/components/auth/LoginInput";

interface VerificationFormProps {
    code: string;
    setCode: (text: string) => void;
    onPressVerify: () => void;
}

const VerificationForm = ({code, setCode, onPressVerify}: VerificationFormProps) => {
    return (
        <View>
            <LoginInput
                value={code}
                placeholder="Code..."
                placeholderTextColor="black"
                onChangeText={setCode}
                keyboardType="numeric"
            />
            <PrimaryButton onPress={onPressVerify} title="Verify Email" color={'#007FFF'}/>
        </View>
    );
};

export default VerificationForm;