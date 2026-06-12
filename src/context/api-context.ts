import type { Graph, OptionItem, Asset, ChartData, Sensor, ChartFilter } from '../types';
import { createContext } from 'react';

type ApiContext = {
    getUserTypes: () => Promise<OptionItem[] | undefined>;
    getGraph: () => Promise<Graph | undefined>;
    getProcess: (processID: string) => Promise<Asset[] | undefined>;
    login: (username: string, password: string) => Promise<boolean | undefined>;
    getCharts: (sensorIDs: number[], filter: ChartFilter) => Promise<ChartData[] | undefined>;
    getSensorsDetails: (sensorIDs: number[]) => Promise<Sensor[] | undefined>;
};

const Api = createContext<ApiContext>({
    getUserTypes: async () => undefined,
    getGraph: async () => undefined,
    getProcess: async (_processID: string) => undefined,
    login: async (_username: string, _password: string) => undefined,
    getCharts: async (_sensorIDs: number[], _filter: ChartFilter) => undefined,
    getSensorsDetails: async (_sensorIDs: number[]) => undefined,
});

export default Api;
