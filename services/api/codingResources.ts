import {apiClient} from "./client";
import {CodingResource} from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_TOKEN = process.env.EXPO_PUBLIC_API_TOKEN;

if (!API_TOKEN) {
    throw new Error("API token is missing in .env!");
}

export const fetchCodingResources = async (): Promise<CodingResource[]> => {
    try {
        const apiResources = await apiClient<CodingResource[]>("/codingResources", {
            headers: {
                "Authorization": `Bearer ${API_TOKEN}`,
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });

        const storedFavorites = await AsyncStorage.getItem("favorites");
        const favorites: number[] = storedFavorites ? JSON.parse(storedFavorites) : [];

        return apiResources.map(resource => ({
            ...resource,
            isFavorite: favorites.includes(resource.id),
        }));
    } catch (error) {
        console.error("Error fetching and marking favorites:", error);
        throw error;
    } finally {
        console.log("Request completed");
    }
};