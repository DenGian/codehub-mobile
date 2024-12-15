import React, {useState} from 'react';
import EventsContent from "@/components/route/tabs/events/EventsContent";

const EventsScreen = () => {
    const [selectedDate, setSelectedDate] = useState<string>('');

    return (
        <EventsContent selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
    );
};

export default EventsScreen;