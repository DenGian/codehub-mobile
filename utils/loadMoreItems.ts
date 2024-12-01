import {CodingResource} from '@/services/api/types';

export const loadMoreItems = (
    visibleItems: CodingResource[],
    setVisibleItems: (items: CodingResource[]) => void,
    filteredResources: CodingResource[]
) => {
    const currentLength = visibleItems.length;
    const moreItems = filteredResources.slice(currentLength, currentLength + 5);
    setVisibleItems([...visibleItems, ...moreItems]);
};