import {StyleSheet, Platform} from 'react-native';

const addEventsStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: Platform.OS === 'ios' ? '#000' : '#aaa',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 5},
        elevation: 5,
    },
    section: {
        fontSize: 16,
        fontWeight: '600',
        color: '#555',
        marginTop: 20,
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputSmall: {
        flex: 1,
        marginHorizontal: 5,
    },
});

export default addEventsStyles;