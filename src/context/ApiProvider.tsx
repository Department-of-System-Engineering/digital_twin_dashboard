import type { Graph, GraphEdge, GraphNode, OptionItem, Asset } from '../types';
import Api from './api-context';

type ApiProviderProps = {
    children: React.ReactElement[] | React.ReactElement;
};

const ApiProvider = ({ children }: ApiProviderProps) => {
    const getUserTypes = async () => {
        const USER_TYPES: OptionItem[] = [
            { id: 1, name: 'Shift Supervisor' },
            { id: 2, name: 'Operator' },
            { id: 3, name: 'Maintenance Technician' },
            { id: 4, name: 'Quality Inspector' },
        ];

        const response = new Promise<OptionItem[]>((resolve) => {
            resolve(USER_TYPES);
        });

        return response;
    };

    const getGraph = async () => {
        const DUMMY_NODES: GraphNode[] = [
            { id: 'p1', name: 'System start' },
            { id: 'p2', name: 'Raw material sorting' },
            { id: 'p3', name: 'Preparation 1' },
            { id: 'p4', name: 'Preparation 2' },
            { id: 'p5', name: 'Assembly 1' },
            { id: 'p6', name: 'Assembly 2' },
            { id: 'p7', name: 'Visual QC' },
            { id: 'p8', name: 'Final warehouse' },
        ];

        const DUMMY_EDGES: GraphEdge[] = [
            { id: 'p1-p2', source: 'p1', target: 'p2' },
            { id: 'p1-p3', source: 'p1', target: 'p3' },
            { id: 'p3-p4', source: 'p3', target: 'p4' },
            { id: 'p2-p5', source: 'p2', target: 'p5' },
            { id: 'p4-p5', source: 'p4', target: 'p5' },
            { id: 'p5-p6', source: 'p5', target: 'p6' },
            { id: 'p6-p7', source: 'p6', target: 'p7' },
            { id: 'p7-p8', source: 'p7', target: 'p8' },
        ];

        const DUMMY_GRAPH: Graph = {
            edges: DUMMY_EDGES,
            nodes: DUMMY_NODES,
        };

        const response = new Promise<Graph>((resolve) => {
            resolve(DUMMY_GRAPH);
        });

        return response;
    };

    const getProcess = async (_processID: string) => {
        const DUMMY_PROCESS: Asset[] = [
            { id: 1, name: 'Conveyor Speed', unit: '%', value: 70, type: 'percent' },
            /*{
                id: 2,
                name: 'Temperature',
                unit: '°C',
                value: 125.5,
                type: 'float',
                min: -120,
            },*/
            { id: 3, name: 'Pressure', unit: 'bar', value: 5, type: 'int' },
            //{ id: 4, name: 'Flow Rate', unit: 'L/min', value: 12.3, type: 'float' },
            { id: 5, name: 'Batch Count', unit: 'pcs', value: 42, type: 'int' },
        ];
        const response = new Promise<Asset[]>((resolve) => {
            resolve(DUMMY_PROCESS);
        });

        return response;
    };

    const login = (_username: string, _password: string) => {
        const response = new Promise<boolean>((resolve) => {
            resolve(true);
        });

        return response;
    };

    const apiContext = {
        getUserTypes: getUserTypes,
        getGraph: getGraph,
        getProcess: getProcess,
        login: login,
    };

    return <Api.Provider value={apiContext}>{children}</Api.Provider>;
};

export default ApiProvider;
