import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    inputContainer: {
        marginBottom: 16,
        position: 'relative',
    },
    label: {
        position: 'absolute',
        top: -10,
        left: 10,
        fontSize: 12,
        color: 'grey',
    },
    inputField: {
        borderBottomWidth: 1,
        borderColor: '#6c47ff',
        paddingVertical: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        color: 'black',
    },
    button: {
        margin: 8,
        alignItems: 'center',
    },
});

export default loginStyles;
