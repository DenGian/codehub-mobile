import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useRouter} from 'expo-router';
import {useCodingResources} from '@/hooks/api/useCodingResources';
import {formatDate} from '@/utils/formatDate';
import LoadingOrError from '@/components/ui/LoadingOrError';
import calendarStyles from "@/styles/routes/tabs/events/calendarStyles";

interface MarkedDates {
    [date: string]: {
        marked?: boolean;
        selected?: boolean;
        selectedColor?: string;
    };
}

const CustomCalendarScreen = () => {
    const [selectedDate, setSelectedDate] = useState<string>('');
    const {resources: events, loading, error} = useCodingResources();
    const router = useRouter();

    const filteredEvents = events?.filter(event => event.metaData?.date && formatDate(event.metaData.date) === selectedDate);

    const markedDates: MarkedDates = {};
    events?.forEach(event => {
        if (event.metaData?.date) {
            const formattedDate = formatDate(event.metaData.date);
            markedDates[formattedDate] = {marked: true};
        }
    });

    if (selectedDate) {
        markedDates[selectedDate] = {
            selected: true,
            marked: !!filteredEvents?.length,
            selectedColor: '#89CFF0',
        };
    }

    return (
        <View style={calendarStyles.container}>
            <Calendar
                onDayPress={(day: { dateString: string }) => setSelectedDate(day.dateString)}
                markedDates={markedDates}
            />
            <ScrollView style={calendarStyles.eventsContainer}>
                <LoadingOrError loading={loading} refreshing={false} error={error}/>
                {!loading && !error && (
                    filteredEvents?.length ? (
                        filteredEvents.map((event, index) => (
                            <View key={index} style={calendarStyles.eventCard}>
                                <Text style={calendarStyles.eventTitle}>{event.description}</Text>
                                <Text style={calendarStyles.eventDetails}>
                                    Location: {event.metaData?.location?.lat}, {event.metaData?.location?.long}
                                </Text>
                                <Text style={calendarStyles.eventTime}>
                                    Time: {event.metaData?.date && formatDate(event.metaData.date, 'HH:mm')}
                                </Text>
                                <TouchableOpacity
                                    style={calendarStyles.button}
                                    onPress={() => router.push(`/home/details/${event.id}`)}
                                >
                                    <Text style={calendarStyles.buttonText}>View Details</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    ) : (
                        <Text style={calendarStyles.noEvents}>No events for this date</Text>
                    )
                )}
            </ScrollView>
        </View>
    );
};

export default CustomCalendarScreen;