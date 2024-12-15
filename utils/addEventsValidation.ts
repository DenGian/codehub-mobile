import {Alert} from 'react-native';

const validateForm = (
    description: string,
    url: string,
    types: string,
    topics: string,
    levels: string,
    date: string,
    lat: string,
    long: string
): boolean => {
    if (!description || !url || !types || !topics || !levels) {
        Alert.alert('Error', 'Please fill in all required fields.');
        return false;
    }

    const urlRegex = /^(https?|ftp):\/\/[^\s\/$.?#].\S*$/i;
    if (!urlRegex.test(url)) {
        Alert.alert('Error', 'Invalid URL format.');
        return false;
    }

    const commaSeparatedRegex = /^([^,\s]+(,[^,\s]+)*)?$/;
    if (!commaSeparatedRegex.test(types) || !commaSeparatedRegex.test(topics) || !commaSeparatedRegex.test(levels)) {
        Alert.alert('Error', 'Types, topics, and levels must be comma-separated with no spaces.');
        return false;
    }

    if ((date && (!lat || !long)) || (lat && (!date || !long)) || (long && (!date || !lat))) {
        Alert.alert('Error', 'Please provide date, latitude, and longitude together.');
        return false;
    }

    if (lat && isNaN(parseFloat(lat))) {
        Alert.alert('Error', 'Invalid latitude value.');
        return false;
    }

    if (long && isNaN(parseFloat(long))) {
        Alert.alert('Error', 'Invalid longitude value.');
        return false;
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (date && !dateRegex.test(date)) {
        Alert.alert('Error', 'Invalid date format. Please use YYYY-MM-DD.');
        return false;
    }

    return true;
};

export {validateForm};