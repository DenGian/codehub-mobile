import React from 'react';
import {View, Text, Switch} from 'react-native';
import checkBoxStyles from '@/styles/ui/checkBoxStyles';

interface CheckBoxProps {
    label: string;
    value: boolean;
    onChange: (value: boolean) => void;
}

const CheckBox = ({label, value, onChange}: CheckBoxProps) => {
    return (
        <View style={checkBoxStyles.container}>
            <Text style={checkBoxStyles.label}>{label}</Text>
            <Switch value={value} onValueChange={onChange}/>
        </View>
    );
};

export default CheckBox;