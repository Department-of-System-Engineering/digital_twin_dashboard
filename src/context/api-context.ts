import type { Graph, OptionItem, Asset, Chart } from '../types';
import { createContext } from 'react';

type ApiContext = {
    getUserTypes: () => Promise<OptionItem[] | undefined>;
    getGraph: () => Promise<Graph | undefined>;
    getProcess: (processID: string) => Promise<Asset[] | undefined>;
    login: (username: string, password: string) => Promise<boolean | undefined>;
    getDataForProcessAssetChart: (
        processID: string,
        assetID: number,
    ) => Promise<Chart[] | undefined>;
};

const Api = createContext<ApiContext>({
    getUserTypes: async () => undefined,
    getGraph: async () => undefined,
    getProcess: async (_processID: string) => undefined,
    login: async (_username: string, _password: string) => undefined,
    getDataForProcessAssetChart: async (_processID: string, _assetID: number) => undefined,
});

export default Api;
