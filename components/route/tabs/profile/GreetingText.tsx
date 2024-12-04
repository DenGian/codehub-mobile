import React from 'react';
import {Text} from 'react-native';
import greetingTextStyles from '@/styles/ui/greetingTextStyles';

interface GreetingTextProps {
    firstName: string;
    lastName: string;
}

const GreetingText: React.FC<GreetingTextProps> = ({firstName, lastName}) => {
    return (
        <Text style={greetingTextStyles.greetingText}>
            Hello, {firstName} {lastName}!
        </Text>
    );
};

export default GreetingText;