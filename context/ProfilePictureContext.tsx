import React, {createContext, useState, useContext, ReactNode} from 'react';

interface ProfilePictureContextProps {
    profilePicture: string | null;
    setProfilePicture: (uri: string | null) => void;
}

const ProfilePictureContext = createContext<ProfilePictureContextProps | undefined>(undefined);

export const ProfilePictureProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [profilePicture, setProfilePicture] = useState<string | null>(null);

    return (
        <ProfilePictureContext.Provider value={{profilePicture, setProfilePicture}}>
            {children}
        </ProfilePictureContext.Provider>
    );
};

export const useProfilePicture = (): ProfilePictureContextProps => {
    const context = useContext(ProfilePictureContext);
    if (!context) {
        throw new Error('useProfilePicture must be used within a ProfilePictureProvider');
    }
    return context;
};