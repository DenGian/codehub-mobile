import {CodingResource} from "@/services/api/types";
import {apiClient} from "@/services/api/client";

const addCodingResources = async (codingResource: CodingResource): Promise<CodingResource> => {
    if (!codingResource) {
        throw new Error("Invalid coding resource data.");
    }
    try {
        const apiResponse = await apiClient<CodingResource>("/codingResources", {
            method: "POST",
            body: JSON.stringify(codingResource),
        });
        console.log("Resource added successfully:", apiResponse);
        return apiResponse;
    } catch (error) {
        console.error("Error adding coding resource:", error);
        throw error;
    } finally {
        console.log("Post Request completed");
    }
};

export {addCodingResources};