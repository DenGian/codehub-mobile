import React from 'react';
import {Button} from 'react-native';

interface PrimaryButtonProps {
    onPress: () => void;
    title: string;
    color?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({onPress, title, color = '#6c47ff'}) => {
    return <Button onPress={onPress} title={title} color={color}/>;
};

export default PrimaryButton;