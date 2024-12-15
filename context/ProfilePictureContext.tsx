import React, {useState, useContext} from 'react';

export interface ProfilePictureContextProps {
    profilePicture: string | null;
    setProfilePicture: (uri: string | null) => void;
}

export const ProfilePictureContext = React.createContext<ProfilePictureContextProps>({
    profilePicture: null,
    setProfilePicture: () => {
    }
});

interface ProfilePictureProviderProps {
    children: React.ReactNode;
    initialProfilePicture?: string | null;
}

const ProfilePictureProvider: React.FC<ProfilePictureProviderProps> = ({children, initialProfilePicture = null}) => {
    const [profilePicture, setProfilePicture] = useState<string | null>(initialProfilePicture);

    return (
        <ProfilePictureContext.Provider value={{profilePicture, setProfilePicture}}>
            {children}
        </ProfilePictureContext.Provider>
    );
};

const useProfilePicture = (): ProfilePictureContextProps => {
    const context = useContext(ProfilePictureContext);
    if (context === undefined) {
        throw new Error('useProfilePicture must be used within a ProfilePictureProvider');
    }
    return context;
};

export {ProfilePictureProvider, useProfilePicture};