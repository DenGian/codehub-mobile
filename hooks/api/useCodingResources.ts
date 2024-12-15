import {useEffect, useState, useCallback} from 'react';
import {fetchCodingResources} from "@/services/api/codingResources";
import {CodingResource} from "@/services/api/types";

const useCodingResources = () => {
    const [resources, setResources] = useState<CodingResource[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const getResources = useCallback(async () => {
        try {
            setLoading(true);
            const data = await fetchCodingResources();
            console.log('Fetched coding resources:', data);
            setResources(data);
            setError(null);
        } catch (err: any) {
            console.error('Error fetching coding resources:', err.message || 'Failed to fetch data');
            setError(err.message || 'Failed to fetch data');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getResources().then(() => {
        });
    }, [getResources]);

    return {
        resources,
        loading,
        error,
        reFetch: getResources
    };
};

export {useCodingResources};