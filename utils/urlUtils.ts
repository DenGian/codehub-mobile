import {Linking} from 'react-native';

const handleOpenURL = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
        await Linking.openURL(url);
    } else {
        alert('URL not supported');
    }
};

export {handleOpenURL};