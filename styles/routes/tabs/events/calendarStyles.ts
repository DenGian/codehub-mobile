import {StyleSheet} from 'react-native';

const calendarStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    eventsContainer: {
        padding: 16,
    },
    eventCard: {
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 2},
        elevation: 3,
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    eventDetails: {
        fontSize: 14,
        color: '#555',
        marginTop: 8,
    },
    eventTime: {
        fontSize: 14,
        color: '#777',
        marginTop: 4,
    },
    noEvents: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
        marginTop: 16,
    },
    button: {
        marginTop: 10,
        paddingVertical: 10,
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

export default calendarStyles;