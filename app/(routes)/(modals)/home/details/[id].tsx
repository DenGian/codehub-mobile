import React from 'react';
import {Stack} from 'expo-router';
import ResourceDetailsScreen from "@/screens/details";

export default function ModalDetailsPage() {
    return (
        <>
            <Stack.Screen
                options={{
                    presentation: 'modal',
                    headerTitle: 'Resource Details',
                    headerBackTitle: 'Back'
                }}
            />
            <ResourceDetailsScreen/>
        </>
    );
}