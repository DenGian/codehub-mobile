import {CodingResource} from "@/services/api/types";
import {apiClient} from "@/services/api/client";

const addCodingResources = async (codingResource: CodingResource): Promise<CodingResource> => {
    if (!codingResource) {
        throw new Error("Invalid coding resource data.");
    }

    return apiClient<CodingResource>("/codingResources", {
        method: "POST",
        body: JSON.stringify(codingResource),
    });
};

export {addCodingResources};
