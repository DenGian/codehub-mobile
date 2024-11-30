import {useState, useEffect} from 'react';
import {useCodingResources} from '@/hooks/api/useCodingResources';
import {CodingResource} from '@/services/api/types';

export const useFilterResources = () => {
    const {resources, loading, error} = useCodingResources();
    const [search, setSearch] = useState<string>('');
    const [filteredResources, setFilteredResources] = useState<CodingResource[]>([]);

    useEffect(() => {
        if (resources) {
            let filtered = resources;

            if (search) {
                filtered = filtered.filter(resource =>
                    resource.description.toLowerCase().includes(search.toLowerCase())
                );
            }

            setFilteredResources(filtered);
        }
    }, [resources, search]);

    return {
        filteredResources,
        loading,
        error,
        search,
        setSearch,
    };
};
