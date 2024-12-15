import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import resourceDetailsStyles from '@/styles/routes/tabs/home/resourceDetailsScreenStyles';

interface ResourceHeaderProps {
    title: string;
    isFavorite: boolean;
    onToggleFavorite: () => void;
}

const ResourceHeader = ({title, isFavorite, onToggleFavorite}: ResourceHeaderProps) => {
    return (
        <View style={resourceDetailsStyles.header}>
            <Text style={resourceDetailsStyles.title}>{title}</Text>
            <TouchableOpacity onPress={onToggleFavorite}>
                <Ionicons
                    name={isFavorite ? 'heart' : 'heart-outline'}
                    size={24}
                    color={isFavorite ? 'red' : 'gray'}
                />
            </TouchableOpacity>
        </View>
    );
};

export default ResourceHeader;