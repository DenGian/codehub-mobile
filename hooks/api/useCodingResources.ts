import {useEffect, useState} from 'react';
import {fetchCodingResources} from "@/services/api/codingResources";
import {CodingResource} from "@/services/api/types";

export const useCodingResources = () => {
    const [resources, setResources] = useState<CodingResource[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getResources = async () => {
            try {
                const data = await fetchCodingResources();
                console.log('Fetched coding resources:', data);
                setResources(data);
            } catch (err: any) {
                console.error('Error fetching coding resources:', err.message || 'Failed to fetch data');
                setError(err.message || 'Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        getResources().then(() => {
        });
    }, []);

    return {resources, loading, error};
};