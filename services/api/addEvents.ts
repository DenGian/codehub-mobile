import {addCodingResources} from '@/services/api/addCodingResources';
import {CodingResource} from '@/services/api/types';

const addEvents = async (newResource: CodingResource): Promise<CodingResource> => {
    return await addCodingResources(newResource);
};

export {addEvents};