import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useRouter} from 'expo-router';
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
                            <View key={index} style={styles.eventCard}>
                                <Text style={styles.eventTitle}>{event.description}</Text>
                                <Text style={styles.eventDetails}>
                                    Location: {event.metaData?.location?.lat}, {event.metaData?.location?.long}
                                </Text>
                                <Text style={styles.eventTime}>
                                    Time: {event.metaData?.date && formatDate(event.metaData.date, 'HH:mm')}
                                </Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => router.push(`/home/details/${event.id}`)}
                                >
                                    <Text style={styles.buttonText}>View Details</Text>
                                </TouchableOpacity>
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
    eventCard: {
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 2},
        elevation: 3,
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    eventDetails: {
        fontSize: 14,
        color: '#555',
        marginTop: 8,
    },
    eventTime: {
        fontSize: 14,
        color: '#777',
        marginTop: 4,
    },
    noEvents: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
        marginTop: 16,
    },
    button: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#007bff',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default CustomCalendarScreen;