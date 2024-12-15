import React from 'react';
import {View} from "react-native";
import EventsScreen from '@/screens/route/tabs/events/EventsPage';

const EventsPage: React.FC = () => {
    return (
        <View style={{flex: 1}}>
            <EventsScreen/>
        </View>
    );
};

export default EventsPage;