import type { GraphNode } from '../types';
import { useContext, useEffect, useState } from 'react';
import { ReactFlow, type Edge, type Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import ProcessModal from './ProcessModal';
import Api from '../context/api-context';

const Graph = () => {
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);
    const [selectedProcessID, setSelectedProcessID] = useState<string | null>(null);
    const { getGraph } = useContext(Api);

    const calculateNodes = (edges: Edge[], initialNodes: GraphNode[]) => {
        const sources = new Set(edges.map((item) => item.source));
        const targets = new Set(edges.map((item) => item.target));
        const start = Array.from(sources).filter((source) => !targets.has(source))[0];

        let sourceToCheck = [start];
        let hasTargets = true;
        const nodes: Node[] = [];
        const levels = [];

        levels.push([start]);

        while (hasTargets) {
            const children = edges.filter((edge) => sourceToCheck.includes(edge.source));

            if (children.length !== 0) {
                const childrenTarget = children.map((child) => child.target);
                levels.push(Array.from(new Set(childrenTarget)));
                sourceToCheck = childrenTarget;
            } else {
                hasTargets = false;
            }
        }

        levels.forEach((level, levelIndex) => {
            level.forEach((node, nodeIndex) => {
                nodes.push({
                    id: node,
                    position: {
                        x: -(200 * (level.length - 1)) / 2 + 200 * nodeIndex,
                        y: (levelIndex + 1) * 100,
                    },
                    data: {
                        label: initialNodes.find((item) => item.id === node)?.name || 'N/A',
                    },
                });
            });
        });

        setNodes(nodes);
    };

    const resetNodeSelection = () => {
        setNodes((prev) =>
            prev.map((node) => ({
                ...node,
                selected: false,
            })),
        );
    };

    useEffect(() => {
        getGraph().then((data) => {
            if (data) {
                setEdges(data.edges);
                calculateNodes(data.edges, data.nodes);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="flex-1 w-full">
                <ReactFlow
                    nodes={nodes}
                    edges={edges.map((e) => ({ ...e, selectable: false }))}
                    nodesDraggable={false}
                    nodesConnectable={false}
                    elementsSelectable={true}
                    panOnDrag={true}
                    onNodeClick={(_event: React.MouseEvent, node: Node) => {
                        setSelectedProcessID(node.id);
                    }}
                    fitView
                />
            </div>

            {selectedProcessID && (
                <ProcessModal
                    processID={selectedProcessID}
                    onClose={() => {
                        resetNodeSelection();
                        setSelectedProcessID(null);
                    }}
                />
            )}
        </>
    );
};

export default Graph;
