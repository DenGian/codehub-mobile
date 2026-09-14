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
            } catch {
                setFavorites([]);
            }
        };

        void loadFavorites();
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
        } catch {
            setFavorites(favorites);
        }
    };

    return {favorites, toggleFavorite};
};

export {useFavorites};
