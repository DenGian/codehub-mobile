import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import PrimaryButton from '@/components/ui/PrimaryButton';
import addEventsStyles from '@/styles/routes/tabs/addEvents/addEventsStyles';
import useAddEventsForm from '@/hooks/route/tabs/addEvents/useAddEventsForm';
import AddEventsFormFields from "@/components/route/tabs/addEvents/AddEventsFormFields";

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
                <AddEventsFormFields
                    description={description}
                    setDescription={setDescription}
                    url={url}
                    setUrl={setUrl}
                    types={types}
                    setTypes={setTypes}
                    topics={topics}
                    setTopics={setTopics}
                    levels={levels}
                    setLevels={setLevels}
                    date={date}
                    setDate={setDate}
                    lat={lat}
                    setLat={setLat}
                    long={long}
                    setLong={setLong}
                />
                <PrimaryButton onPress={handleSubmit} title="Add Event" color="#007FFF" loading={loading}/>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default AddEventForm;