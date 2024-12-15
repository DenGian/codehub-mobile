import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet, KeyboardTypeOptions, ViewStyle} from 'react-native';

interface InputFieldProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: KeyboardTypeOptions;
    style?: ViewStyle;
}

const InputField = ({placeholder, value, onChangeText, keyboardType, style}: InputFieldProps) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={[styles.inputContainer, style]}>
            {(isFocused || value) && <Text style={styles.label}>{placeholder}</Text>}
            <TextInput
                style={styles.inputField}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={!isFocused ? placeholder : ''}
                placeholderTextColor="grey"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 16,
        position: 'relative',
    },
    label: {
        position: 'absolute',
        top: -10,
        left: 10,
        fontSize: 12,
        color: 'grey',
    },
    inputField: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        color: 'black',
    },
});

export default InputField;