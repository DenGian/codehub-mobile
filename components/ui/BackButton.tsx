import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useRouter} from 'expo-router';

const BackButton: React.FC = () => {
    const router = useRouter();

    return (
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
            <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007bff',
        borderRadius: 5,
        alignItems: 'center',
        margin: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default BackButton;