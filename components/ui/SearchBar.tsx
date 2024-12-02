import React from 'react';
import {View, TextInput, ViewStyle} from 'react-native';
import searchBarStyles from '@/styles/ui/searchBarStyles';

interface SearchBarProps {
    value: string;
    onChange: (text: string) => void;
    style?: ViewStyle;
}

const SearchBar: React.FC<SearchBarProps> = ({value, onChange, style}) => {
    return (
        <View style={[searchBarStyles.container, style]}>
            <TextInput
                style={searchBarStyles.input}
                placeholder="Search..."
                value={value}
                onChangeText={onChange}
            />
        </View>
    );
};

export default SearchBar;