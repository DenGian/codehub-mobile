import React, {useState} from 'react';
import {View, Button, Alert, StyleSheet} from 'react-native';
import InputField from '@/components/ui/InputField';
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

    const handleSubmit = async () => {
        if (!description || !url || !types || !topics || !levels) {
            Alert.alert('Error', 'Please fill in all required fields.');
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
            const addedResource = await addCodingResources(newResource);
            Alert.alert('Success', `Resource added with ID: ${addedResource.id}`);
        } catch (error) {
            Alert.alert('Error', 'Failed to add resource');
        }
    };

    return (
        <View style={styles.container}>
            <InputField placeholder="Description*" value={description} onChangeText={setDescription}/>
            <InputField placeholder="URL*" value={url} onChangeText={setUrl}/>
            <InputField placeholder="Types* (comma-separated)" value={types} onChangeText={setTypes}/>
            <InputField placeholder="Topics* (comma-separated)" value={topics} onChangeText={setTopics}/>
            <InputField placeholder="Levels* (comma-separated)" value={levels} onChangeText={setLevels}/>
            <InputField placeholder="Date" value={date} onChangeText={setDate}/>
            <InputField placeholder="Latitude" value={lat} onChangeText={setLat}/>
            <InputField placeholder="Longitude" value={long} onChangeText={setLong}/>
            <Button title="Add Resource" onPress={handleSubmit}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default AddEventForm;