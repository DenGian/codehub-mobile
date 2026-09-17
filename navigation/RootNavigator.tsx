import React from 'react';
import {ClerkProvider, useAuth} from '@clerk/expo';
import {tokenCache} from '@clerk/expo/token-cache';
import getClerkPublishableKey from '@/utils/getClerkPublishableKey';
import {Stack} from 'expo-router';

const InitialLayout = () => {
    const {isLoaded, isSignedIn} = useAuth();

    if (!isLoaded) {
        return null;
    }

    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index"/>
            <Stack.Protected guard={!isSignedIn}>
                <Stack.Screen name="(auth)"/>
            </Stack.Protected>
            <Stack.Protected guard={Boolean(isSignedIn)}>
                <Stack.Screen name="(routes)"/>
            </Stack.Protected>
        </Stack>
    );
};

const RootLayoutNav = () => {
    const CLERK_PUBLISHABLE_KEY = getClerkPublishableKey();

    return (
        <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
            <InitialLayout/>
        </ClerkProvider>
    );
};

export default RootLayoutNav;
