import React from 'react';
import {Button, View, ActivityIndicator} from 'react-native';
import primaryButtonStyles from '@/styles/ui/primaryButtonStyles';

interface PrimaryButtonProps {
    onPress: () => void;
    title: string;
    color: string;
    loading?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({onPress, title, color, loading = false}) => {
    return (
        <View style={primaryButtonStyles.buttonContainer}>
            {loading ? (
                <ActivityIndicator size="small" color={color}/>
            ) : (
                <Button onPress={onPress} title={title} color={color}/>
            )}
        </View>
    );
};

export default PrimaryButton;