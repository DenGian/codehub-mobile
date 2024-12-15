import React from 'react';
import {Stack} from 'expo-router';

interface HeaderBackProps {
    visible: boolean;
}

const HeaderBack = ({visible}: HeaderBackProps) => {
    return <Stack.Screen options={{headerBackVisible: visible}}/>;
};

export default HeaderBack;