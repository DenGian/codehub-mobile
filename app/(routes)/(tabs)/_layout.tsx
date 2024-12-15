import React from 'react';
import TabsNavigator from "@/navigation/TabsNavigator";
import {ProfilePictureProvider} from "@/context/ProfilePictureContext";

const TabsLayout: React.FC = () => {
    return (
        <ProfilePictureProvider>
            <TabsNavigator/>
        </ProfilePictureProvider>
    )
};

export default TabsLayout;