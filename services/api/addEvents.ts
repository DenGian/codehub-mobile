import {addCodingResources} from '@/services/api/addCodingResources';
import {CodingResource} from '@/services/api/types';

export const addEvents = async (newResource: CodingResource): Promise<CodingResource> => {
    return await addCodingResources(newResource);
};