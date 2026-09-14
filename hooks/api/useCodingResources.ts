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
            setResources(data);
            setError(null);
        } catch (err: any) {
            setError(err.message || 'Failed to fetch data');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void getResources();
    }, [getResources]);

    return {
        resources,
        loading,
        error,
        reFetch: getResources
    };
};

export {useCodingResources};
