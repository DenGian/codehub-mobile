import {CodingResource} from '@/services/api/types';
import {LAZY_LOAD_INCREMENT} from '@/config/constants';

const loadMoreItems = (
    visibleItems: CodingResource[],
    setVisibleItems: (items: CodingResource[]) => void,
    filteredResources: CodingResource[]
) => {
    const currentLength = visibleItems.length;
    const moreItems = filteredResources.slice(currentLength, currentLength + LAZY_LOAD_INCREMENT);
    setVisibleItems([...visibleItems, ...moreItems]);
};

export {loadMoreItems};