import {useState, useEffect} from 'react';
import {useCodingResources} from '@/hooks/api/useCodingResources';
import {CodingResource} from '@/services/api/types';
import {useFavorites} from '@/hooks/storage/useFavorites';

export const useFilterResources = () => {
    const {resources, loading, error} = useCodingResources();
    const {favorites} = useFavorites();
    const [search, setSearch] = useState<string>('');
    const [showFavorites, setShowFavorites] = useState<boolean>(false);
    const [filteredResources, setFilteredResources] = useState<CodingResource[]>([]);

    useEffect(() => {
        if (resources) {
            let filtered = resources;

            if (search) {
                filtered = filtered.filter(resource =>
                    resource.description.toLowerCase().includes(search.toLowerCase())
                );
            }

            if (showFavorites) {
                filtered = filtered.filter(resource => favorites.includes(resource.id));
            }

            setFilteredResources(filtered);
        }
    }, [resources, search, showFavorites, favorites]);

    return {
        filteredResources,
        loading,
        error,
        search,
        setSearch,
        showFavorites,
        setShowFavorites,
    };
};