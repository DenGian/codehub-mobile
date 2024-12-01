import {useState, useEffect} from 'react';
import {CodingResource} from '@/services/api/types';
import {LAZY_LOAD_INITIAL_COUNT} from '@/config/constants';

export const useLazyLoading = (filteredResources: CodingResource[], itemsPerLoad = LAZY_LOAD_INITIAL_COUNT) => {
    const [visibleItems, setVisibleItems] = useState<CodingResource[]>([]);

    useEffect(() => {
        setVisibleItems(filteredResources.slice(0, itemsPerLoad));
    }, [filteredResources, itemsPerLoad]);

    return {visibleItems, setVisibleItems};
};