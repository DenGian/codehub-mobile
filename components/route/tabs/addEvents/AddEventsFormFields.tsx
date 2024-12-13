import React from 'react';
import {View, Text} from 'react-native';
import InputField from '@/components/ui/InputField';
import addEventsStyles from '@/styles/routes/tabs/addEventsStyles';

interface AddEventsFormFieldsProps {
    description: string;
    setDescription: (text: string) => void;
    url: string;
    setUrl: (text: string) => void;
    types: string;
    setTypes: (text: string) => void;
    topics: string;
    setTopics: (text: string) => void;
    levels: string;
    setLevels: (text: string) => void;
    date: string;
    setDate: (text: string) => void;
    lat: string;
    setLat: (text: string) => void;
    long: string;
    setLong: (text: string) => void;
}

const AddEventsFormFields: React.FC<AddEventsFormFieldsProps> = (
    {
        description,
        setDescription,
        url,
        setUrl,
        types,
        setTypes,
        topics,
        setTopics,
        levels,
        setLevels,
        date,
        setDate,
        lat,
        setLat,
        long,
        setLong,
    }) => {
    return (
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
        </View>
    );
};

export default AddEventsFormFields;