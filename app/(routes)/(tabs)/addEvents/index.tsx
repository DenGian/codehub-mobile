import React from 'react';
import {View} from 'react-native';
import AddEventsScreen from "@/screens/route/tabs/addEvents/AddEventsPage";

const AddEventsPage: React.FC = () => {
    return (
        <View style={{flex: 1}}>
            <AddEventsScreen/>
        </View>
    );
};

export default AddEventsPage;