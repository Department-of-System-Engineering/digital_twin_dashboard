import type {
    Graph,
    OptionItem,
    Asset,
    Chart,
    Sensor,
    ChartFilter,
    Product,
    OrderDetailsType,
    OrderListItemType,
} from '../types';
import { createContext } from 'react';

type ApiContext = {
    getUserTypes: () => Promise<OptionItem[] | undefined>;
    getGraph: () => Promise<Graph | undefined>;
    getProcess: (processID: string) => Promise<Asset[] | undefined>;
    login: (username: string, password: string) => Promise<boolean | undefined>;
    getCharts: (sensorIDs: number[], filter: ChartFilter) => Promise<Chart[] | undefined>;
    getSensorsDetails: (sensorIDs: number[]) => Promise<Sensor[] | undefined>;
    getAvailableProducts: () => Promise<Product[] | undefined>;
    orderProducts: (
        products: Product[],
        details?: OrderDetailsType,
    ) => Promise<boolean | undefined>;
    getOrders: () => Promise<OrderListItemType[] | undefined>;
};

const Api = createContext<ApiContext>({
    getUserTypes: async () => undefined,
    getGraph: async () => undefined,
    getProcess: async (_processID: string) => undefined,
    login: async (_username: string, _password: string) => undefined,
    getCharts: async (_sensorIDs: number[], _filter: ChartFilter) => undefined,
    getSensorsDetails: async (_sensorIDs: number[]) => undefined,
    getAvailableProducts: async () => undefined,
    orderProducts: async (_products: Product[], _details?: OrderDetailsType) => undefined,
    getOrders: async () => undefined,
});

export default Api;
