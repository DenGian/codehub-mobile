type ClerkErrorLike = {
    message?: string;
    errors?: Array<{
        longMessage?: string;
        message?: string;
    }>;
};

const getClerkErrorMessage = (error: unknown): string => {
    if (!error || typeof error !== 'object') {
        return 'Authentication failed. Please try again.';
    }

    const clerkError = error as ClerkErrorLike;
    const firstError = clerkError.errors?.[0];

    return firstError?.longMessage
        ?? firstError?.message
        ?? clerkError.message
        ?? 'Authentication failed. Please try again.';
};

export default getClerkErrorMessage;
