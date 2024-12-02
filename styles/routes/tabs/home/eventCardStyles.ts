import {StyleSheet} from 'react-native';

const eventCardStyles = StyleSheet.create({
    card: {
        padding: 15,
        margin: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 4},
        elevation: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    types: {
        fontSize: 14,
        color: '#555',
        marginTop: 10,
    },
    topics: {
        fontSize: 14,
        color: '#777',
        marginTop: 5,
    },
    button: {
        marginTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#007bff',
        borderRadius: 6,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default eventCardStyles;