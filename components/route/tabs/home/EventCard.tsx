import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

interface EventCardProps {
    id: number;
    title: string;
    types: string;
    topics: string;
    isFavorite: boolean;
    onToggleFavorite: () => void;
    onDetailsPress: () => void;
}

const EventCard: React.FC<EventCardProps> = (
    {title, types, topics, isFavorite, onToggleFavorite, onDetailsPress}) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={onToggleFavorite} activeOpacity={0.7}>
                    <FontAwesome
                        name={isFavorite ? 'heart' : 'heart-o'}
                        size={24}
                        color={isFavorite ? '#ff4081' : '#bbb'}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.types}>
                <FontAwesome name="tag" size={14} color="#555"/> Types: {types}
            </Text>
            <Text style={styles.topics}>
                <FontAwesome name="list" size={14} color="#777"/> Topics: {topics}
            </Text>
            <TouchableOpacity onPress={onDetailsPress} style={styles.button} activeOpacity={0.8}>
                <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 15,
        margin: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 4},
        elevation: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    types: {
        fontSize: 14,
        color: '#555',
        marginTop: 10,
    },
    topics: {
        fontSize: 14,
        color: '#777',
        marginTop: 5,
    },
    button: {
        marginTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#007bff',
        borderRadius: 6,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default EventCard;
