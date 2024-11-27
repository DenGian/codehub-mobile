import React from 'react';
import {View, TextInput} from 'react-native';
import PrimaryButton from '@/components/ui/PrimaryButton';
import RegisterStyles from "@/styles/auth/registerStyles";

interface VerificationFormProps {
    code: string;
    setCode: (text: string) => void;
    onPressVerify: () => void;
}

const VerificationForm: React.FC<VerificationFormProps> = ({code, setCode, onPressVerify}) => {
    return (
        <View>
            <TextInput
                value={code}
                placeholder="Code..."
                placeholderTextColor="black"
                style={RegisterStyles.inputField}
                onChangeText={setCode}
            />
            <PrimaryButton onPress={onPressVerify} title="Verify Email"/>
        </View>
    );
};

export default VerificationForm;