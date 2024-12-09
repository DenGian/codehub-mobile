import React, {useState} from 'react';
import {View, Alert, StyleSheet} from 'react-native';
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
        <View style={styles.container}>
            <InputField placeholder="Description*" value={description} onChangeText={setDescription}/>
            <InputField placeholder="URL*" value={url} onChangeText={setUrl} keyboardType="url"/>
            <InputField placeholder="Types* (comma-separated)" value={types} onChangeText={setTypes}/>
            <InputField placeholder="Topics* (comma-separated)" value={topics} onChangeText={setTopics}/>
            <InputField placeholder="Levels* (comma-separated)" value={levels} onChangeText={setLevels}/>
            <InputField placeholder="Date" value={date} onChangeText={setDate} keyboardType="numbers-and-punctuation"/>
            <InputField placeholder="Latitude" value={lat} onChangeText={setLat}
                        keyboardType="numbers-and-punctuation"/>
            <InputField placeholder="Longitude" value={long} onChangeText={setLong}
                        keyboardType="numbers-and-punctuation"/>
            <PrimaryButton onPress={handleSubmit} title="Add Resource" color={'#6c47ff'} loading={loading}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default AddEventForm;