import {useState, useEffect} from 'react';
import {CodingResource} from '@/services/api/types';

export const useLazyLoading = (filteredResources: CodingResource[], itemsPerLoad = 10) => {
    const [visibleItems, setVisibleItems] = useState<CodingResource[]>([]);

    useEffect(() => {
        setVisibleItems(filteredResources.slice(0, itemsPerLoad));
    }, [filteredResources, itemsPerLoad]);

    return {visibleItems, setVisibleItems};
};