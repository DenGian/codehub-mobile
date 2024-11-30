import {StyleSheet} from 'react-native';

const filterBarStyles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    icon: {
        marginRight: 8,
    },
    searchBar: {
        flex: 1,
    },
    separator: {
        height: 1,
        backgroundColor: '#ddd',
        marginBottom: 10,
    },
});

export default filterBarStyles;