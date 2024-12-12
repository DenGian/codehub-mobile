import React, {useState} from 'react';
import {View, Alert, StyleSheet, Text, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import InputField from '@/components/ui/InputField';
import PrimaryButton from '@/components/ui/PrimaryButton';
import {addCodingResources} from '@/services/api/addCodingResources';
import {CodingResource} from '@/services/api/types';

const AddEventForm: React.FC = () => {
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [types, setTypes] = useState('');
    const [topics, setTopics] = useState('');
    const [levels, setLevels] = useState('');
    const [date, setDate] = useState('');
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!description || !url || !types || !topics || !levels) {
            Alert.alert('Error', 'Please fill in all required fields.');
            return;
        }

        const urlRegex = /^(https?|ftp):\/\/[^\s\/$.?#].\S*$/i;
        if (!urlRegex.test(url)) {
            Alert.alert('Error', 'Invalid URL format.');
            return;
        }

        const commaSeparatedRegex = /,/;
        if (!commaSeparatedRegex.test(types) || !commaSeparatedRegex.test(topics) || !commaSeparatedRegex.test(levels)) {
            Alert.alert('Error', 'Types, topics, and levels must be comma-separated.');
            return;
        }

        if ((date && (!lat || !long)) || (lat && (!date || !long)) || (long && (!date || !lat))) {
            Alert.alert('Error', 'Please provide date, latitude, and longitude together.');
            return;
        }

        if (lat && isNaN(parseFloat(lat))) {
            Alert.alert('Error', 'Invalid latitude value.');
            return;
        }

        if (long && isNaN(parseFloat(long))) {
            Alert.alert('Error', 'Invalid longitude value.');
            return;
        }

        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (date && !dateRegex.test(date)) {
            Alert.alert('Error', 'Invalid date format. Please use YYYY-MM-DD.');
            return;
        }

        const formattedDate = date ? new Date(date).toISOString() : undefined;

        const newResource: CodingResource = {
            id: 0,
            description,
            url,
            types: types.split(',').map(type => type.trim()),
            topics: topics.split(',').map(topic => topic.trim()),
            levels: levels.split(',').map(level => level.trim()),
            metaData: {
                date: formattedDate,
                location: lat && long ? {lat: parseFloat(lat), long: parseFloat(long)} : undefined,
            },
        };

        try {
            setLoading(true);
            const addedResource = await addCodingResources(newResource);
            Alert.alert('Success', `Resource added with ID: ${addedResource.id}`);
            setDescription('');
            setUrl('');
            setTypes('');
            setTopics('');
            setLevels('');
            setDate('');
            setLat('');
            setLong('');
        } catch (error) {
            Alert.alert('Error', 'Failed to add resource');
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.screen}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={100}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.section}>Required Information</Text>
                    <InputField placeholder="Description*" value={description} onChangeText={setDescription}/>
                    <InputField placeholder="URL*" value={url} onChangeText={setUrl} keyboardType="url"/>
                    <InputField placeholder="Types (comma-separated)*" value={types} onChangeText={setTypes}/>
                    <InputField placeholder="Topics (comma-separated)*" value={topics} onChangeText={setTopics}/>
                    <InputField placeholder="Levels (comma-separated)*" value={levels} onChangeText={setLevels}/>

                    <Text style={styles.section}>Optional Details</Text>
                    <InputField placeholder="Date (YYYY-MM-DD)" value={date} onChangeText={setDate}
                                keyboardType="numbers-and-punctuation"/>
                    <View style={styles.row}>
                        <InputField placeholder="Latitude" value={lat} onChangeText={setLat} style={styles.inputSmall}
                                    keyboardType="numbers-and-punctuation"/>
                        <InputField placeholder="Longitude" value={long} onChangeText={setLong}
                                    style={styles.inputSmall}
                                    keyboardType="numbers-and-punctuation"/>
                    </View>
                    <PrimaryButton onPress={handleSubmit} title="Add Event" color="#007FFF" loading={loading}/>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: Platform.OS === 'ios' ? '#000' : '#aaa',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 5},
        elevation: 5,
    },
    section: {
        fontSize: 16,
        fontWeight: '600',
        color: '#555',
        marginTop: 20,
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputSmall: {
        flex: 1,
        marginHorizontal: 5,
    },
});

export default AddEventForm;