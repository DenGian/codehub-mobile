import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useCodingResources} from '@/hooks/api/useCodingResources';
import {formatDate} from '@/utils/formatDate';
import LoadingOrError from '@/components/ui/LoadingOrError';
import calendarStyles from '@/styles/routes/tabs/events/calendarStyles';
import EventCard from "@/components/route/tabs/events/EventCard";

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
                            <EventCard key={index} event={event}/>
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
