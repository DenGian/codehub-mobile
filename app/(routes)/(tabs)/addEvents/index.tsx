import React from 'react';
import {View, KeyboardAvoidingView, Platform, ScrollView, Text} from 'react-native';
import InputField from '@/components/ui/InputField';
import PrimaryButton from '@/components/ui/PrimaryButton';
import addEventsStyles from '@/styles/routes/tabs/addEventsStyles';
import useAddEventsForm from "@/hooks/route/tabs/addEvents/useAddEventsForm";

const AddEventForm: React.FC = () => {
    const {
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
        loading,
        handleSubmit,
    } = useAddEventsForm();

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