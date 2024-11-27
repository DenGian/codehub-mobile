import React from 'react';
import {ClerkProvider} from '@clerk/clerk-expo';
import useAuthRedirect from '@/hooks/auth/useAuthRedirect';
import useTokenCache from '@/hooks/auth/useTokenCache';
import getClerkPublishableKey from '@/utils/getClerkPublishableKey';
import {Slot} from 'expo-router';

const InitialLayout = () => {
    useAuthRedirect();
    return <Slot/>;
};

const RootLayoutNav = () => {
    const tokenCache = useTokenCache();
    const CLERK_PUBLISHABLE_KEY = getClerkPublishableKey();

    return (
        <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
            <InitialLayout/>
        </ClerkProvider>
    );
};

export default RootLayoutNav;