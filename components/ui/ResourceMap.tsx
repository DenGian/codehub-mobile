import React from 'react';
import {Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import resourceDetailsStyles from '@/styles/routes/tabs/home/resourceDetailsScreenStyles';
import mapStyles from "@/styles/routes/tabs/home/mapStyles";
import {formatDate} from '@/utils/formatDate';

interface ResourceMapProps {
    date: string;
    location: {
        lat: number;
        long: number;
    };
}

const ResourceMap = ({date, location}: ResourceMapProps) => {
    const formattedDate = formatDate(date);

    return (
        <>
            <Text style={resourceDetailsStyles.detailText}>
                <Text style={resourceDetailsStyles.label}>Date: </Text>
                {formattedDate}
            </Text>

            <MapView
                style={mapStyles.map}
                initialRegion={{
                    latitude: location.lat,
                    longitude: location.long,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: location.lat,
                        longitude: location.long,
                    }}
                    title="Event Location"
                />
            </MapView>
        </>
    );
};

export default ResourceMap;