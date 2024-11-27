import React from 'react';
import {Stack} from 'expo-router';

interface HeaderBackProps {
    visible: boolean;
}

const HeaderBack: React.FC<HeaderBackProps> = ({visible}) => {
    return <Stack.Screen options={{headerBackVisible: visible}}/>;
};

export default HeaderBack;