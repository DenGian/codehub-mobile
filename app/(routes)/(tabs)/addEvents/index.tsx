import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const AddEvent: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Event</Text>
            <TextInput style={styles.input} placeholder="Event Title"/>
            <TextInput style={styles.input} placeholder="Event Description"/>
            <Button title="Save Event" onPress={() => {
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8
    }
});

export default AddEvent;