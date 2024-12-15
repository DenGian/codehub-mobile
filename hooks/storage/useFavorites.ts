import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useFavorites = () => {
    const [favorites, setFavorites] = useState<number[]>([]);

    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const storedFavorites = await AsyncStorage.getItem('favorites');
                if (storedFavorites) {
                    setFavorites(JSON.parse(storedFavorites));
                }
            } catch (error) {
                console.error('Failed to load favorites from AsyncStorage:', error);
            }
        };

        loadFavorites().then(() => {
        });
    }, []);

    const toggleFavorite = async (id: number) => {
        try {
            let updatedFavorites = [...favorites];
            if (updatedFavorites.includes(id)) {
                updatedFavorites = updatedFavorites.filter((favorite) => favorite !== id);
            } else {
                updatedFavorites.push(id);
            }
            setFavorites(updatedFavorites);
            await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } catch (error) {
            console.error('Failed to update favorites in AsyncStorage:', error);
        }
    };

    return {favorites, toggleFavorite};
};

export {useFavorites};