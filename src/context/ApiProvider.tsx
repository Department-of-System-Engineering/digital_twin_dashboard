import type { Graph, GraphEdge, GraphNode, OptionItem } from '../types';
import Api from './api-context';

type ApiProviderProps = {
    children: React.ReactElement[] | React.ReactElement;
};

const ApiProvider = ({ children }: ApiProviderProps) => {
    const getUserTypes = async () => {
        const USER_TYPES: OptionItem[] = [
            { id: 1, name: 'Műszakvezető' },
            { id: 2, name: 'Operátor' },
            { id: 3, name: 'Karbantartó' },
            { id: 4, name: 'Minőségellenőr' },
        ];

        const response = new Promise<OptionItem[]>((resolve) => {
            resolve(USER_TYPES);
        });

        return response;
    };

    const getGraph = async () => {
        const DUMMY_NODES: GraphNode[] = [
            { id: 'p1', name: 'Process 1' },
            { id: 'p2', name: 'Process 2' },
            { id: 'p3', name: 'Process 3' },
            { id: 'p4', name: 'Process 4' },
            { id: 'p5', name: 'Process 5' },
            { id: 'p6', name: 'Process 6' },
            { id: 'p7', name: 'Process 7' },
            { id: 'p8', name: 'Process 8' },
            { id: 'p9', name: 'Process 9' },
            { id: 'p10', name: 'Process 10' },
            { id: 'p11', name: 'Process 11' },
            { id: 'p12', name: 'Process 12' },
            { id: 'p13', name: 'Process 13' },
            { id: 'p14', name: 'Process 14' },
            { id: 'p15', name: 'Process 15' },
            { id: 'p16', name: 'Process 16' },
            { id: 'p17', name: 'Process 17' },
            { id: 'p18', name: 'Process 18' },
            { id: 'p19', name: 'Process 19' },
            { id: 'p20', name: 'Process 20' },
        ];

        const DUMMY_EDGES: GraphEdge[] = [
            { id: 'p1-p3', source: 'p1', target: 'p3' },
            { id: 'p1-p4', source: 'p1', target: 'p4' },
            { id: 'p2-p5', source: 'p2', target: 'p5' },

            { id: 'p3-p6', source: 'p3', target: 'p6' },
            { id: 'p4-p6', source: 'p4', target: 'p6' },
            { id: 'p5-p7', source: 'p5', target: 'p7' },

            { id: 'p6-p8', source: 'p6', target: 'p8' },
            { id: 'p7-p9', source: 'p7', target: 'p9' },
            { id: 'p7-p10', source: 'p7', target: 'p10' },

            { id: 'p8-p11', source: 'p8', target: 'p11' },
            { id: 'p9-p12', source: 'p9', target: 'p12' },
            { id: 'p10-p12', source: 'p10', target: 'p12' },
            { id: 'p10-p13', source: 'p10', target: 'p13' },

            { id: 'p11-p14', source: 'p11', target: 'p14' },
            { id: 'p12-p15', source: 'p12', target: 'p15' },
            { id: 'p13-p16', source: 'p13', target: 'p16' },

            { id: 'p14-p17', source: 'p14', target: 'p17' },
            { id: 'p15-p17', source: 'p15', target: 'p17' },
            { id: 'p16-p18', source: 'p16', target: 'p18' },

            { id: 'p17-p19', source: 'p17', target: 'p19' },
            { id: 'p18-p20', source: 'p18', target: 'p20' },

            { id: 'p3-p9', source: 'p3', target: 'p9' },
            { id: 'p5-p8', source: 'p5', target: 'p8' },
            { id: 'p11-p15', source: 'p11', target: 'p15' },
            { id: 'p12-p18', source: 'p12', target: 'p18' },
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

    const apiContext = {
        getUserTypes: getUserTypes,
        getGraph: getGraph,
    };

    return <Api.Provider value={apiContext}>{children}</Api.Provider>;
};

export default ApiProvider;
