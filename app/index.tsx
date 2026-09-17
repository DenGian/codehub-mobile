import {useAuth} from '@clerk/expo';
import {Redirect} from 'expo-router';
import React from "react";

const StartPage: React.FC = () => {
    const {isLoaded, isSignedIn} = useAuth();

    if (!isLoaded) {
        return null;
    }

    return <Redirect href={isSignedIn ? "/(routes)/(tabs)/home" : "/(auth)/login"}/>;
};

export default StartPage;
