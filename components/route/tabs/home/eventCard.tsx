// components/home/EventCard.tsx
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {CodingResource} from '@/services/api/types';

interface EventCardProps {
    event: CodingResource;
}

const EventCard: React.FC<EventCardProps> = ({event}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{event.description}</Text>
            <Text style={styles.details}>
                Types: {event.types.join(', ')}
            </Text>
            <Text style={styles.details}>
                Topics: {event.topics.join(', ')}
            </Text>
            <Text style={styles.details}>
                Levels: {event.levels.join(', ')}
            </Text>
            <TouchableOpacity onPress={() => window.open(event.url, '_blank')} style={styles.button}>
                <Text style={styles.buttonText}>Visit Resource</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    details: {
        fontSize: 14,
        marginBottom: 3,
    },
    button: {
        marginTop: 10,
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default EventCard;
