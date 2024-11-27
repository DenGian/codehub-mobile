import * as SecureStore from 'expo-secure-store';
import {ClerkProvider} from '@clerk/clerk-expo';
import {Slot} from 'expo-router';
import {TokenCache} from '@/types/TokenCache';
import useAuthRedirect from '@/hooks/auth/useAuthRedirect';

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
    useAuthRedirect();
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