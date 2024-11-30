import React from 'react';
import {View, TextInput, StyleSheet, ViewStyle} from 'react-native';

interface SearchBarProps {
    value: string;
    onChange: (text: string) => void;
    style?: ViewStyle;
}

const SearchBar: React.FC<SearchBarProps> = ({value, onChange, style}) => {
    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                value={value}
                onChangeText={onChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {marginBottom: 10},
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
});

export default SearchBar;