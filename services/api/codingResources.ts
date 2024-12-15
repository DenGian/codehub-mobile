import {apiClient} from "./client";
import {CodingResource} from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchCodingResources = async (): Promise<CodingResource[]> => {
    try {
        const apiResources = await apiClient<CodingResource[]>("/codingResources");

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

export {fetchCodingResources};