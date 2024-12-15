import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

interface LoadingSpinnerProps {
    visible: boolean;
}

const LoadingSpinner = ({visible}: LoadingSpinnerProps) => {
    return <Spinner visible={visible}/>;
};

export default LoadingSpinner;