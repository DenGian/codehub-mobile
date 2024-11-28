import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {handleOpenURL} from '@/utils/urlUtils';

interface VisitSourceButtonProps {
    url: string;
}

const VisitSourceButton: React.FC<VisitSourceButtonProps> = ({url}) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => handleOpenURL(url)}
        >
            <Text style={styles.buttonText}>Visit Source</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: '#007bff',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default VisitSourceButton;