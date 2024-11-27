const BASE_URL = process.env.API_URL ?? "https://api.example.com";

if (!BASE_URL) {
    throw new Error("Please provide an API url in the .env file")
}

export const apiClient = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {'Content-Type': 'application/json'},
        ...options,
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
};
