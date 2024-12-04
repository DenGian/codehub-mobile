import React from 'react';
import {Tabs} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
import {useAuth} from '@clerk/clerk-expo';
import LogoutButton from '@/components/auth/LogoutButton';
import CustomHeader from '@/components/ui/Header';

const TabsPage = () => {
    const {isSignedIn} = useAuth();

    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#6c47ff'
                },
                headerTintColor: '#fff',
                headerRight: () => <CustomHeader/>
            }}
        >
            <Tabs.Screen
                name="home/index"
                options={{
                    headerTitle: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home-outline" size={size} color={color}/>
                    ),
                    tabBarLabel: 'Home'
                }}
                redirect={!isSignedIn}
            />
            <Tabs.Screen
                name="events/index"
                options={{
                    headerTitle: 'Events',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="calendar-outline" size={size} color={color}/>
                    ),
                    tabBarLabel: 'Events'
                }}
                redirect={!isSignedIn}
            />
            <Tabs.Screen
                name="profile/index"
                options={{
                    headerTitle: 'My Profile',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="person-outline" size={size} color={color}/>
                    ),
                    tabBarLabel: 'My Profile',
                    headerRight: () => (
                        <>
                            <CustomHeader/>
                            <LogoutButton/>
                        </>
                    )
                }}
                redirect={!isSignedIn}
            />
        </Tabs>
    );
};

export default TabsPage;