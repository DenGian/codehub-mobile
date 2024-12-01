import React from 'react';
import {FlatList} from 'react-native';
import {CodingResource} from '@/services/api/types';
import {loadMoreItems} from '@/utils/loadMoreItems';
import {renderItem} from '@/components/route/tabs/home/RenderItem';

interface FilteredListProps {
    visibleItems: CodingResource[];
    setVisibleItems: React.Dispatch<React.SetStateAction<CodingResource[]>>;
    filteredResources: CodingResource[];
    refreshing: boolean;
    handleRefresh: () => void;
}

const FilteredList: React.FC<FilteredListProps> = (
    {visibleItems, setVisibleItems, filteredResources, refreshing, handleRefresh}) => {
    return (
        <FlatList
            data={visibleItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            refreshing={refreshing}
            onRefresh={handleRefresh}
            onEndReached={() => loadMoreItems(visibleItems, setVisibleItems, filteredResources)}
            onEndReachedThreshold={0.5}
        />
    );
};

export default FilteredList;