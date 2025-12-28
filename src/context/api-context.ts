import type { Graph, OptionItem } from '../types';
import { createContext } from 'react';

type ApiContext = {
    getUserTypes: () => Promise<OptionItem[] | undefined>;
    getGraph: () => Promise<Graph | undefined>;
};

const Api = createContext<ApiContext>({
    getUserTypes: async () => undefined,
    getGraph: async () => undefined,
});

export default Api;
