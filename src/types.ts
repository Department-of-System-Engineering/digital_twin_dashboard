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
export type Asset = {
    id: number;
    name: string;
    unit: string;
    value: number;
    type: NumberType;
    min?: number;
};

export type ProcessNodeData = {
    label: string;
};
