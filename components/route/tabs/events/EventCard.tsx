import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useRouter} from 'expo-router';
import calendarStyles from '@/styles/routes/tabs/events/calendarStyles';

interface EventCardProps {
    event: {
        id: number;
        description: string;
        metaData?: {
            location?: { lat: number; long: number };
            date?: string;
        };
    };
}

const EventCard: React.FC<EventCardProps> = ({event}) => {
    const router = useRouter();

    return (
        <View style={calendarStyles.eventCard}>
            <Text style={calendarStyles.eventTitle}>{event.description}</Text>
            <Text style={calendarStyles.eventDetails}>
                Location: {event.metaData?.location?.lat}, {event.metaData?.location?.long}
            </Text>
            <Text style={calendarStyles.eventTime}>
                Time: {event.metaData?.date && new Date(event.metaData.date).toLocaleTimeString()}
            </Text>
            <TouchableOpacity
                style={calendarStyles.button}
                onPress={() => router.push(`/home/details/${event.id}`)}
            >
                <Text style={calendarStyles.buttonText}>View Details</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EventCard;