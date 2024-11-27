import {apiClient} from './client';
import {CodingResource} from './types';

export const fetchCodingResources = (): Promise<CodingResource[]> => {
    return apiClient<CodingResource[]>('/codingResources');
};
