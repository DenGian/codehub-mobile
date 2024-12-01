import React from 'react';
import {View} from 'react-native';
import HomeScreen from "@/screens/route/tabs/home/HomePage";

const HomePage: React.FC = () => {
    return (
        <View style={{flex: 1}}>
            <HomeScreen/>
        </View>
    );
};

export default HomePage;