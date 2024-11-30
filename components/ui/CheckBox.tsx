import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

interface CheckBoxProps {
    label: string;
    value: boolean;
    onChange: (value: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({label, value, onChange}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Switch value={value} onValueChange={onChange}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        marginRight: 10,
    },
});

export default CheckBox;