import {StyleSheet} from 'react-native';

const loadingOrErrorStyles = StyleSheet.create({
    errorContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default loadingOrErrorStyles;