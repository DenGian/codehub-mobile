import React from 'react';
import {Pressable} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useAuth} from '@clerk/clerk-expo';

const LogoutButton = () => {
    const {signOut} = useAuth();

    const doLogout = () => {
        signOut().then(() => {
        });
    };

    return (
        <Pressable onPress={doLogout} style={{marginRight: 10}}>
            <Ionicons name="log-out-outline" size={24} color={'#fff'}/>
        </Pressable>
    );
};

export default LogoutButton;