import {ClerkProvider} from '@clerk/clerk-expo';
import {Slot} from 'expo-router';
import useAuthRedirect from '@/hooks/auth/useAuthRedirect';
import useTokenCache from '@/hooks/auth/useTokenCache';

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!CLERK_PUBLISHABLE_KEY) {
    throw new Error("Set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in .env");
}

const InitialLayout = () => {
    useAuthRedirect();
    return <Slot/>;
};

const RootLayoutNav = () => {
    const tokenCache = useTokenCache();

    return (
        <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
            <InitialLayout/>
        </ClerkProvider>
    );
};

export default RootLayoutNav;