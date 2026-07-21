import type {
    Graph,
    OptionItem,
    Asset,
    ChartData,
    Sensor,
    ChartFilter,
    Product,
    OrderEnrichmentType,
    OrderListItemType,
    Order,
} from '../types';
import { createContext } from 'react';

type ApiContext = {
    getUserTypes: () => Promise<OptionItem[] | undefined>;
    getGraph: () => Promise<Graph | undefined>;
    getProcess: (processID: string) => Promise<Asset[] | undefined>;
    login: (username: string, password: string) => Promise<boolean | undefined>;
    getCharts: (sensorIDs: number[], filter: ChartFilter) => Promise<ChartData[] | undefined>;
    getSensorsDetails: (sensorIDs: number[]) => Promise<Sensor[] | undefined>;
    getAvailableProducts: () => Promise<Product[] | undefined>;
    orderProducts: (
        products: Product[],
        details?: OrderEnrichmentType,
    ) => Promise<boolean | undefined>;
    getOrders: () => Promise<OrderListItemType[] | undefined>;
    getOrder: (orderID?: string) => Promise<Order | undefined>;
    completeOrder: (orderID: string) => Promise<boolean | undefined>;
    deleteOrder: (orderID: string) => Promise<boolean | undefined>;
    getCompletedOrders: () => Promise<OrderListItemType[] | undefined>;
};

const Api = createContext<ApiContext>({
    getUserTypes: async () => undefined,
    getGraph: async () => undefined,
    getProcess: async (_processID: string) => undefined,
    login: async (_username: string, _password: string) => undefined,
    getCharts: async (_sensorIDs: number[], _filter: ChartFilter) => undefined,
    getSensorsDetails: async (_sensorIDs: number[]) => undefined,
    getAvailableProducts: async () => undefined,
    orderProducts: async (_products: Product[], _details?: OrderEnrichmentType) => undefined,
    getOrders: async () => undefined,
    getOrder: async (_orderID?: string) => undefined,
    completeOrder: async (_orderID: string) => undefined,
    deleteOrder: async (_orderID: string) => undefined,
    getCompletedOrders: async () => undefined,
});

export default Api;
