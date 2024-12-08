import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useCodingResources} from '@/hooks/api/useCodingResources';
import {formatDate} from '@/utils/formatDate';
import LoadingOrError from '@/components/ui/LoadingOrError';

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
            selectedColor: 'blue',
        };
    }

    return (
        <View style={styles.container}>
            <Calendar
                onDayPress={(day: { dateString: string }) => setSelectedDate(day.dateString)}
                markedDates={markedDates}
            />
            <View style={styles.eventsContainer}>
                <LoadingOrError loading={loading} refreshing={false} error={error}/>
                {!loading && !error && (
                    filteredEvents?.length ? (
                        filteredEvents.map((event, index) => (
                            <View key={index} style={styles.event}>
                                <Text style={styles.eventTitle}>{event.description}</Text>
                                <Text style={styles.eventDetails}>
                                    {event.metaData?.location?.lat}, {event.metaData?.location?.long} - {event.metaData?.date && formatDate(event.metaData.date, 'HH:mm')}
                                </Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.noEvents}>No events for this date</Text>
                    )
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    eventsContainer: {
        padding: 16,
    },
    event: {
        marginBottom: 8,
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    eventDetails: {
        fontSize: 14,
        color: '#666',
    },
    noEvents: {
        fontSize: 16,
        color: '#999',
    },
});

export default CustomCalendarScreen;