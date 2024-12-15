const API_TOKEN = process.env.EXPO_PUBLIC_API_TOKEN;

if (!API_TOKEN) {
    throw new Error("API token is missing in .env!");
}

const getHeaders = () => ({
    "Authorization": `Bearer ${API_TOKEN}`,
    "Content-Type": "application/json",
    "Accept": "application/json",
});

export {getHeaders};