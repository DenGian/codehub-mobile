import React from 'react';
import {View, TextInput} from 'react-native';
import resetStyles from '@/styles/auth/resetStyles';
import PrimaryButton from '@/components/ui/PrimaryButton';

interface ResetFormProps {
    emailAddress: string;
    setEmailAddress: (text: string) => void;
    onRequestReset: () => void;
    loading: boolean;
}

const ResetForm: React.FC<ResetFormProps> = ({emailAddress, setEmailAddress, onRequestReset, loading}) => {
    return (
        <View>
            <TextInput
                autoCapitalize="none"
                placeholder="code@hub.dev"
                placeholderTextColor="black"
                value={emailAddress}
                onChangeText={setEmailAddress}
                style={resetStyles.inputField}
            />
            <PrimaryButton onPress={onRequestReset} title="Send Reset Email" color={'#6c47ff'} loading={loading}/>
        </View>
    );
};

export default ResetForm;