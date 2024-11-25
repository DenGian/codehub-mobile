import {useEffect} from 'react';
import * as SecureStore from 'expo-secure-store';
import {ClerkProvider, useAuth} from '@clerk/clerk-expo';
import {Slot, useRouter, useSegments} from 'expo-router';
import {TokenCache} from "@/types/TokenCache";

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!CLERK_PUBLISHABLE_KEY) {
    throw new Error("Set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in .env");
}

// Cache the Clerk JWT
const tokenCache: TokenCache = {
    async getToken(key: string) {
        try {
            return SecureStore.getItemAsync(key);
        } catch (err) {
            return null;
        }
    },
    async saveToken(key: string, value: string) {
        try {
            return SecureStore.setItemAsync(key, value);
        } catch (err) {
            return;
        }
    }
};

const InitialLayout = () => {
    const {isLoaded, isSignedIn} = useAuth();
    const segments = useSegments();
    const router = useRouter();

    // If the user is signed in, redirect them to the home page
    // If the user is not signed in, redirect them to the login page
    useEffect(() => {
        if (!isLoaded) return;

        const inAuthGroup = segments[0] === '(auth)';

        if (isSignedIn && inAuthGroup) {
            router.replace("/(routes)/(tabs)/home");
        } else if (!isSignedIn && !inAuthGroup) {
            router.replace('/(auth)/login');
        }
    }, [isSignedIn]);

    return <Slot/>;
};

const RootLayoutNav = () => {
    return (
        <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
            <InitialLayout/>
        </ClerkProvider>
    );
};

export default RootLayoutNav;