import {useState, useEffect} from 'react';
import {useCodingResources} from '@/hooks/api/useCodingResources';
import {CodingResource} from '@/services/api/types';

const useDetailResource = (id: string) => {
    const {resources, loading, error} = useCodingResources();
    const [resource, setResource] = useState<CodingResource | null>(null);

    useEffect(() => {
        if (Array.isArray(resources) && resources.length > 0) {
            const foundResource = resources.find((res) => res.id.toString() === id);
            setResource(foundResource || null);
        }
    }, [resources, id]);

    return {resource, loading, error};
};

export default useDetailResource;