export type OptionItem = {
    id: number;
    name: string;
};

export type NumberType = 'int' | 'float' | 'percent';

export type GraphNode = {
    id: string;
    name: string;
};

export type GraphEdge = {
    id: string;
    source: string;
    target: string;
};

export type Graph = {
    nodes: GraphNode[];
    edges: GraphEdge[];
};

export type Sensor = {
    id: number;
    name: string;
    unit: string;
    value?: number;
    type: NumberType;
    min?: number;
    disabled?: boolean;
};

export type Asset = {
    assetID: number;
    assetName: string;
    sensors: Sensor[];
};

export type ProcessNodeData = {
    label: string;
    type: string[];
    state: 'ACTIVE' | 'ERROR' | 'DONE';
};

export type Chart = {
    xAxis: string;
    [sensorId: number]: number;
};

export type ChartFilter = {
    samplingFrequency: number;
    fromDate: string;
    toDate: string;
};

export type Product = {
    id: string;
    imageUrl?: string;
    maxQuantity?: number;
    quantity?: number;
};

export type OrderDetailsType = {
    customerName: string | undefined;
    fulfillmentDate: string | undefined;
    priority: boolean;
};

export type OrderListItemType = {
    orderID: string;
    customerName: string;
    orderDate: string;
    fulfillmentDate: string;
    priority: boolean;
};
