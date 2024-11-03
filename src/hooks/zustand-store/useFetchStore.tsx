import { create } from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware';
import { FetchState } from '../../global/interface/interface';

export const useFetchStore = create<FetchState<any>>()(
    devtools((set) => ({
        data: null,
        loading: false,
        error: null,

        fetchData: async (url: string) => {
            set({ loading: true, error: null });
            
            try {
                const response = await axios.get(url);
                set({ data: response.data });
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Unknow error";
                set({ error: errorMessage });
            } finally {
                set({ loading: false });
            }
        },
    }))
);
