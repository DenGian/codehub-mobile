// components/route/tabs/home/eventCard.tsx
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
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
    {title, types, topics, isFavorite, onToggleFavorite, onDetailsPress,}) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={onToggleFavorite}>
                    <FontAwesome
                        name={isFavorite ? 'heart' : 'heart-o'}
                        size={24}
                        color={isFavorite ? '#ff4081' : '#bbb'}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.types}>Types: {types}</Text>
            <Text style={styles.topics}>Topics: {topics}</Text>
            <TouchableOpacity onPress={onDetailsPress} style={styles.button}>
                <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 15,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 5, // for shadow on Android
        shadowColor: '#000', // for shadow on iOS
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 4},
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    types: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
    },
    topics: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
    },
    button: {
        marginTop: 10,
        paddingVertical: 8,
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

export default EventCard;
