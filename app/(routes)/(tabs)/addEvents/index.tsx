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

    const handleSubmit = async () => {
        const newResource: CodingResource = {
            id: 0,
            description,
            url,
            types: types.split(',').map(type => type.trim()),
            topics: topics.split(',').map(topic => topic.trim()),
            levels: levels.split(',').map(level => level.trim()),
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
            <InputField placeholder="Description" value={description} onChangeText={setDescription}/>
            <InputField placeholder="URL" value={url} onChangeText={setUrl}/>
            <InputField placeholder="Types (comma-separated)" value={types} onChangeText={setTypes}/>
            <InputField placeholder="Topics (comma-separated)" value={topics} onChangeText={setTopics}/>
            <InputField placeholder="Levels (comma-separated)" value={levels} onChangeText={setLevels}/>
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