import React from 'react';
import {Button, StyleSheet, View, ActivityIndicator} from 'react-native';

interface PrimaryButtonProps {
    onPress: () => void;
    title: string;
    color: string;
    loading?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({onPress, title, color, loading = false}) => {
    return (
        <View style={styles.buttonContainer}>
            {loading ? (
                <ActivityIndicator size="small" color={color}/>
            ) : (
                <Button onPress={onPress} title={title} color={color}/>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 8,
    },
});

export default PrimaryButton;