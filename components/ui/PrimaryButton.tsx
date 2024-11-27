import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

interface PrimaryButtonProps {
    onPress: () => void;
    title: string;
    color: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({onPress, title, color}) => {
    return (
        <View style={styles.buttonContainer}>
            <Button onPress={onPress} title={title} color={color}/>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 8,
    },
});

export default PrimaryButton;