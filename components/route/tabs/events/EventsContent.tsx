import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import LoadingOrError from '@/components/ui/LoadingOrError';
import calendarStyles from '@/styles/routes/tabs/events/calendarStyles';
import EventCard from "@/components/route/tabs/events/EventCard";
import {markDates} from '@/utils/markDates';
import {formatDate} from '@/utils/formatDate';
import {useCodingResources} from '@/hooks/api/useCodingResources';

interface CustomCalendarContentProps {
    selectedDate: string;
    setSelectedDate: (date: string) => void;
}

const EventsContent: React.FC<CustomCalendarContentProps> = ({selectedDate, setSelectedDate}) => {
    const {resources: events, loading, error} = useCodingResources();

    const filteredEvents = events?.filter(event => event.metaData?.date && formatDate(event.metaData.date) === selectedDate);

    const markedDates = markDates(events || undefined, selectedDate);

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

export default EventsContent;