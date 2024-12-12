import React from 'react';
import {View} from 'react-native';
import PrimaryButton from '@/components/ui/PrimaryButton';
import RegisterStyles from "@/styles/auth/registerStyles";
import LoginInput from "@/components/auth/LoginInput";

interface VerificationFormProps {
    code: string;
    setCode: (text: string) => void;
    onPressVerify: () => void;
}

const VerificationForm: React.FC<VerificationFormProps> = ({code, setCode, onPressVerify}) => {
    return (
        <View>
            <LoginInput
                value={code}
                placeholder="Code..."
                placeholderTextColor="black"
                style={RegisterStyles.inputField}
                onChangeText={setCode}
            />
            <PrimaryButton onPress={onPressVerify} title="Verify Email" color={'#007FFF'}/>
        </View>
    );
};

export default VerificationForm;