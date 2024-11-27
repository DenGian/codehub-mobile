import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface GreetingTextProps {
    firstName: string;
    lastName: string;
}

const GreetingText: React.FC<GreetingTextProps> = ({firstName, lastName}) => {
    return (
        <Text style={styles.greetingText}>
            Good morning {firstName} {lastName}!
        </Text>
    );
};

const styles = StyleSheet.create({
    greetingText: {
        textAlign: 'center',
    },
});

export default GreetingText;