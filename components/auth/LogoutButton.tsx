import React from 'react';
import {Pressable} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useClerk} from '@clerk/expo';

const LogoutButton = () => {
    const {signOut} = useClerk();

    const doLogout = async () => {
        await signOut();
    };

    return (
        <Pressable onPress={doLogout} style={{marginRight: 10}}>
            <Ionicons name="log-out-outline" size={24} color={'#fff'}/>
        </Pressable>
    );
};

export default LogoutButton;
