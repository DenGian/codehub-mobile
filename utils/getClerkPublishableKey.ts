const getClerkPublishableKey = (): string => {
    const key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
    if (!key) {
        throw new Error("Set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in .env");
    }
    return key;
};

export default getClerkPublishableKey;