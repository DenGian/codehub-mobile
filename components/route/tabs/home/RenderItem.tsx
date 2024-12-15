import React from 'react';
import {ListRenderItemInfo} from 'react-native';
import {CodingResource} from '@/services/api/types';
import HomeScreenRenderItem from '@/components/route/tabs/home/HomeScreenRenderItem';

const RenderItem = ({item}: ListRenderItemInfo<CodingResource>) => (
    <HomeScreenRenderItem item={item}/>
);

export default RenderItem;