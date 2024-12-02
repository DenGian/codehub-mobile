import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useRouter} from 'expo-router';
import backButtonStyles from '@/styles/ui/backButtonStyles';

const BackButton: React.FC = () => {
    const router = useRouter();

    return (
        <TouchableOpacity style={backButtonStyles.button} onPress={() => router.back()}>
            <Text style={backButtonStyles.buttonText}>Back</Text>
        </TouchableOpacity>
    );
};

export default BackButton;