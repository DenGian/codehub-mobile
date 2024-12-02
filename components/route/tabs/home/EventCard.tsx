import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import eventCardStyles from "@/styles/routes/tabs/home/eventCardStyles";

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
        <View style={eventCardStyles.card}>
            <View style={eventCardStyles.cardHeader}>
                <Text style={eventCardStyles.title}>{title}</Text>
                <TouchableOpacity onPress={onToggleFavorite} activeOpacity={0.7}>
                    <FontAwesome
                        name={isFavorite ? 'heart' : 'heart-o'}
                        size={24}
                        color={isFavorite ? '#ff4081' : '#bbb'}
                    />
                </TouchableOpacity>
            </View>
            <Text style={eventCardStyles.types}>
                <FontAwesome name="tag" size={14} color="#555"/> Types: {types}
            </Text>
            <Text style={eventCardStyles.topics}>
                <FontAwesome name="list" size={14} color="#777"/> Topics: {topics}
            </Text>
            <TouchableOpacity onPress={onDetailsPress} style={eventCardStyles.button} activeOpacity={0.8}>
                <Text style={eventCardStyles.buttonText}>View Details</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EventCard;