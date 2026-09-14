import {useState, useEffect, useCallback} from 'react';
import {useCodingResources} from '@/hooks/api/useCodingResources';
import {CodingResource} from '@/services/api/types';
import {useFavorites} from '@/hooks/storage/useFavorites';

const useFilterResources = () => {
    const {resources, loading, error, reFetch} = useCodingResources();
    const {favorites} = useFavorites();
    const [search, setSearch] = useState<string>('');
    const [showFavorites, setShowFavorites] = useState<boolean>(false);
    const [filteredResources, setFilteredResources] = useState<CodingResource[]>([]);
    const [refreshing, setRefreshing] = useState<boolean>(false);

    const handleRefresh = useCallback(async () => {
        setRefreshing(true);
        try {
            await reFetch();
        } finally {
            setRefreshing(false);
        }
    }, [reFetch]);

    useEffect(() => {
        if (resources) {
            let filtered = resources;

            if (search) {
                filtered = filtered.filter(resource =>
                    resource.description.toLowerCase().includes(search.toLowerCase())
                );
            }

            if (showFavorites) {
                filtered = filtered.filter(resource => resource.isFavorite);
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
        refreshing,
        handleRefresh,
    };
};

export {useFilterResources};
