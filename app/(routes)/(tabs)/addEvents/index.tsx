import React, {useState} from 'react';
import {View, Alert, KeyboardAvoidingView, Platform, ScrollView, Text} from 'react-native';
import InputField from '@/components/ui/InputField';
import PrimaryButton from '@/components/ui/PrimaryButton';
import {CodingResource} from '@/services/api/types';
import addEventsStyles from '@/styles/routes/tabs/addEventsStyles';
import {validateForm} from '@/utils/addEventsValidation';
import {addEvents} from "@/services/api/addEvents";

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
        if (!validateForm(description, url, types, topics, levels, date, lat, long)) {
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
            const addedResource = await addEvents(newResource);
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
            style={addEventsStyles.screen}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={100}
        >
            <ScrollView contentContainerStyle={addEventsStyles.container}>
                <View style={addEventsStyles.card}>
                    <Text style={addEventsStyles.section}>Required Information</Text>
                    <InputField placeholder="Description*" value={description} onChangeText={setDescription}/>
                    <InputField placeholder="URL*" value={url} onChangeText={setUrl} keyboardType="url"/>
                    <InputField placeholder="Types (comma-separated)*" value={types} onChangeText={setTypes}/>
                    <InputField placeholder="Topics (comma-separated)*" value={topics} onChangeText={setTopics}/>
                    <InputField placeholder="Levels (comma-separated)*" value={levels} onChangeText={setLevels}/>

                    <Text style={addEventsStyles.section}>Optional Details</Text>
                    <InputField placeholder="Date (YYYY-MM-DD)" value={date} onChangeText={setDate}
                                keyboardType="numbers-and-punctuation"/>
                    <View style={addEventsStyles.row}>
                        <InputField placeholder="Latitude" value={lat} onChangeText={setLat}
                                    style={addEventsStyles.inputSmall}
                                    keyboardType="numbers-and-punctuation"/>
                        <InputField placeholder="Longitude" value={long} onChangeText={setLong}
                                    style={addEventsStyles.inputSmall}
                                    keyboardType="numbers-and-punctuation"/>
                    </View>
                    <PrimaryButton onPress={handleSubmit} title="Add Event" color="#007FFF" loading={loading}/>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default AddEventForm;