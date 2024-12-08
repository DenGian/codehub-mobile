import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';

interface Event {
    name: string;
    time: string;
}

interface Events {
    [date: string]: Event[];
}

interface MarkedDates {
    [date: string]: {
        marked?: boolean;
        selected?: boolean;
        selectedColor?: string;
    };
}

const CustomCalendarScreen = () => {
    const [selectedDate, setSelectedDate] = useState<string>('');

    // Example events
    const events: Events = {
        '2024-12-01': [{name: 'Event 1', time: '10:00 AM'}],
        '2024-12-03': [
            {name: 'Event 2', time: '2:00 PM'},
            {name: 'Event 3', time: '6:00 PM'},
        ],
    };

    // Create a markedDates object manually
    const markedDates: MarkedDates = {};
    for (const date in events) {
        markedDates[date] = {marked: true};
    }
    if (selectedDate) {
        markedDates[selectedDate] = {
            selected: true,
            marked: !!events[selectedDate], // Mark if it has events
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
                {events[selectedDate]?.length ? (
                    events[selectedDate].map((event, index) => (
                        <Text key={index} style={styles.event}>
                            {event.name} - {event.time}
                        </Text>
                    ))
                ) : (
                    <Text style={styles.noEvents}>No events for this date</Text>
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
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    event: {
        fontSize: 16,
        marginVertical: 4,
    },
    noEvents: {
        fontSize: 16,
        color: '#999',
    },
});

export default CustomCalendarScreen;