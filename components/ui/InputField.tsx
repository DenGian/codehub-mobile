import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

interface InputFieldProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({placeholder, value, onChangeText}) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor="black"
            value={value}
            onChangeText={onChangeText}
            style={styles.inputField}
        />
    );
};

const styles = StyleSheet.create({
    inputField: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderColor: '#6c47ff',
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff',
    },
});

export default InputField;