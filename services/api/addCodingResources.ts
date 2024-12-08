import {CodingResource} from "@/services/api/types";
import {apiClient} from "@/services/api/client";

const API_TOKEN = process.env.EXPO_PUBLIC_API_TOKEN;

if (!API_TOKEN) {
    throw new Error("API token is missing in .env!");
}

export const addCodingResources = async (codingResource: CodingResource): Promise<CodingResource> => {
    if (!codingResource) {
        throw new Error("Invalid coding resource data.");
    }
    try {
        const apiResponse = await apiClient<CodingResource>("/codingResources", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_TOKEN}`,
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(codingResource),
        });
        console.log("Resource added successfully:", apiResponse);
        return apiResponse;
    } catch (error) {
        console.error("Error adding coding resource:", error);
        throw error;
    } finally {
        console.log("Request completed");
    }
};
