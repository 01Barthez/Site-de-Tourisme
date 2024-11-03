import { useEffect, useCallback } from 'react';
import { useFetchStore } from './zustand-store/useFetchStore';

export const useFetch = <T,>(url: string) => {
    const { data, loading, error, fetchData } = useFetchStore();

    const stableFetchData = useCallback(() => fetchData(url), [url]);

    useEffect(() => {
        stableFetchData();
    }, [stableFetchData]);

    return { data: data as T | null, loading, error };
};
