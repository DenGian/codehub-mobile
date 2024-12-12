import React from 'react';
import {Text} from 'react-native';
import greetingTextStyles from '@/styles/ui/greetingTextStyles';

interface GreetingTextProps {
    firstName: string;
    lastName: string;
}

const GreetingText: React.FC<GreetingTextProps> = ({firstName, lastName}) => {
    const name = [firstName, lastName].filter(Boolean).join(' ');
    return (
        <Text style={greetingTextStyles.greetingText}>
            Hey{name ? `, ${name}` : ''}!
        </Text>
    );
};

export default GreetingText;