import React from 'react';
import TabsNavigator from "@/navigation/TabsNavigator";
import {ProfilePictureProvider} from "@/context/ProfilePictureContext";

const TabsLayout = () => {
    return (
        <ProfilePictureProvider>
            <TabsNavigator/>
        </ProfilePictureProvider>
    )
};

export default TabsLayout;