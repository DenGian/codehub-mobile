import {apiClient} from "@/services/api/client";

const deleteCodingResource = async (id: number): Promise<void> => {
    if (!id || id <= 0) {
        throw new Error("Invalid resource ID.");
    }
    try {
        await apiClient<void>(`/codingResources/${id}`, {
            method: "DELETE",
        });
        console.log(`Resource with ID ${id} deleted successfully.`);
    } catch (error) {
        console.error("Error deleting coding resource:", error);
        throw error;
    } finally {
        console.log("Delete request completed");
    }
};

export {deleteCodingResource};