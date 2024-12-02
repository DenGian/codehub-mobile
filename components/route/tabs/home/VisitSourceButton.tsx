import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {handleOpenURL} from '@/utils/urlUtils';
import visitSourceButtonStyles from "@/styles/routes/tabs/home/visitSourceButtonStyles";

interface VisitSourceButtonProps {
    url: string;
}

const VisitSourceButton: React.FC<VisitSourceButtonProps> = ({url}) => {
    return (
        <TouchableOpacity
            style={visitSourceButtonStyles.button}
            onPress={() => handleOpenURL(url)}
        >
            <Text style={visitSourceButtonStyles.buttonText}>Visit Source</Text>
        </TouchableOpacity>
    );
};

export default VisitSourceButton;