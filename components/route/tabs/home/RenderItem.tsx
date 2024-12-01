import React from 'react';
import {ListRenderItemInfo} from 'react-native';
import {CodingResource} from '@/services/api/types';
import HomeScreenRenderItem from '@/components/route/tabs/home/HomeScreenRenderItem';

export const renderItem = ({item}: ListRenderItemInfo<CodingResource>) => (
    <HomeScreenRenderItem item={item}/>
);