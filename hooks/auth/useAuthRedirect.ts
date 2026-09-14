import {useEffect} from 'react';
import {useRouter, useSegments} from 'expo-router';
import {useAuth} from '@clerk/clerk-expo';

const useAuthRedirect = () => {
    const {isLoaded, isSignedIn} = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if (!isLoaded) return;

        const inAuthGroup = segments[0] === '(auth)';

        if (isSignedIn && inAuthGroup) {
            router.replace("/(routes)/(tabs)/home");
        } else if (!isSignedIn && !inAuthGroup) {
            router.replace('/(auth)/login');
        }
    }, [isLoaded, isSignedIn, router, segments]);
};

export default useAuthRedirect;
