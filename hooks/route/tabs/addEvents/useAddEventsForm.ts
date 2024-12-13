import {useState} from 'react';
import {Alert} from 'react-native';
import {CodingResource} from '@/services/api/types';
import {validateForm} from '@/utils/addEventsValidation';
import {addEvents} from '@/services/api/addEvents';

const useAddEventsForm = () => {
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [types, setTypes] = useState('');
    const [topics, setTopics] = useState('');
    const [levels, setLevels] = useState('');
    const [date, setDate] = useState('');
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!validateForm(description, url, types, topics, levels, date, lat, long)) {
            return;
        }

        const formattedDate = date ? new Date(date).toISOString() : undefined;

        const newResource: CodingResource = {
            id: 0,
            description,
            url,
            types: types.split(',').map(type => type.trim()),
            topics: topics.split(',').map(topic => topic.trim()),
            levels: levels.split(',').map(level => level.trim()),
            metaData: {
                date: formattedDate,
                location: lat && long ? {lat: parseFloat(lat), long: parseFloat(long)} : undefined,
            },
        };

        try {
            setLoading(true);
            const addedResource = await addEvents(newResource);
            Alert.alert('Success', `Resource added with ID: ${addedResource.id}`);
            setDescription('');
            setUrl('');
            setTypes('');
            setTopics('');
            setLevels('');
            setDate('');
            setLat('');
            setLong('');
        } catch (error) {
            Alert.alert('Error', 'Failed to add resource');
        } finally {
            setLoading(false);
        }
    };

    return {
        description,
        setDescription,
        url,
        setUrl,
        types,
        setTypes,
        topics,
        setTopics,
        levels,
        setLevels,
        date,
        setDate,
        lat,
        setLat,
        long,
        setLong,
        loading,
        handleSubmit,
    };
};

export default useAddEventsForm;