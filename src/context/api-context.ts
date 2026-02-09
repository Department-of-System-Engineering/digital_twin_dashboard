import type { Graph, OptionItem, Asset, Chart, Sensor, ChartFilter } from '../types';
import { createContext } from 'react';

type ApiContext = {
    getUserTypes: () => Promise<OptionItem[] | undefined>;
    getGraph: () => Promise<Graph | undefined>;
    getProcess: (processID: string) => Promise<Asset[] | undefined>;
    login: (username: string, password: string) => Promise<boolean | undefined>;
    getChart: (sensorID: number, filter: ChartFilter) => Promise<Chart[] | undefined>;
    getSensorDetails: (sensorID: number) => Promise<Sensor | undefined>;
};

const Api = createContext<ApiContext>({
    getUserTypes: async () => undefined,
    getGraph: async () => undefined,
    getProcess: async (_processID: string) => undefined,
    login: async (_username: string, _password: string) => undefined,
    getChart: async (_sensorID: number, _filter: ChartFilter) => undefined,
    getSensorDetails: async (_sensorID: number) => undefined,
});

export default Api;
