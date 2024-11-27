import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

interface LoadingSpinnerProps {
    visible: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({visible}) => {
    return <Spinner visible={visible}/>;
};

export default LoadingSpinner;