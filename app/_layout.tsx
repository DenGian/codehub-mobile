import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';

const tokenCache = {
    async getToken(key: string) {
        return SecureStore.getItemAsync(key);
    },
    async saveToken(key: string, value: string) {
        return SecureStore.setItemAsync(key, value);
    },
};

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const RootLayoutNav = () => {
    return (
        <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey!}>
            <ClerkLoaded>
                <Slot />
            </ClerkLoaded>
        </ClerkProvider>
    );
}

export default RootLayoutNav;
