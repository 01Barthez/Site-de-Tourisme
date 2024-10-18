import { useEffect } from 'react';
import { useFetchStore } from './zustand-store/useFetchStore';

export const useFetch = (url: string) => {
    const { data, loading, error, fetchData } = useFetchStore();

    useEffect(() => {
        fetchData(url)
    }, [fetchData, url]);

    return { data, loading, error };
};
