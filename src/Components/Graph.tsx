import { useEffect, useState } from "react";
import { ReactFlow, type Edge, type Node } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import ProcessModal from "./ProcessModal";

const initialNodes = [
    { process_step_id: "p1", process_step_name: "Process 1" },
    { process_step_id: "p2", process_step_name: "Process 2" },
    { process_step_id: "p3", process_step_name: "Process 3" },
    { process_step_id: "p4", process_step_name: "Process 4" },
    { process_step_id: "p5", process_step_name: "Process 5" },
    { process_step_id: "p6", process_step_name: "Process 6" },
    { process_step_id: "p7", process_step_name: "Process 7" },
    { process_step_id: "p8", process_step_name: "Process 8" },
    { process_step_id: "p9", process_step_name: "Process 9" },
    { process_step_id: "p10", process_step_name: "Process 10" },
    { process_step_id: "p11", process_step_name: "Process 11" },
    { process_step_id: "p12", process_step_name: "Process 12" },
    { process_step_id: "p13", process_step_name: "Process 13" },
    { process_step_id: "p14", process_step_name: "Process 14" },
    { process_step_id: "p15", process_step_name: "Process 15" },
    { process_step_id: "p16", process_step_name: "Process 16" },
    { process_step_id: "p17", process_step_name: "Process 17" },
    { process_step_id: "p18", process_step_name: "Process 18" },
    { process_step_id: "p19", process_step_name: "Process 19" },
    { process_step_id: "p20", process_step_name: "Process 20" },
];

const initialEdges: Edge[] = [
    // Layer 1 → 2
    { id: "p1-p3", source: "p1", target: "p3" },
    { id: "p1-p4", source: "p1", target: "p4" },
    { id: "p2-p5", source: "p2", target: "p5" },

    // Layer 2 → 3
    { id: "p3-p6", source: "p3", target: "p6" },
    { id: "p4-p6", source: "p4", target: "p6" },
    { id: "p5-p7", source: "p5", target: "p7" },

    // Layer 3 → 4
    { id: "p6-p8", source: "p6", target: "p8" },
    { id: "p7-p9", source: "p7", target: "p9" },
    { id: "p7-p10", source: "p7", target: "p10" },

    // Layer 4 → 5
    { id: "p8-p11", source: "p8", target: "p11" },
    { id: "p9-p12", source: "p9", target: "p12" },
    { id: "p10-p12", source: "p10", target: "p12" },
    { id: "p10-p13", source: "p10", target: "p13" },

    // Layer 5 → 6
    { id: "p11-p14", source: "p11", target: "p14" },
    { id: "p12-p15", source: "p12", target: "p15" },
    { id: "p13-p16", source: "p13", target: "p16" },

    // Layer 6 → 7
    { id: "p14-p17", source: "p14", target: "p17" },
    { id: "p15-p17", source: "p15", target: "p17" },
    { id: "p16-p18", source: "p16", target: "p18" },

    // Layer 7 → 8
    { id: "p17-p19", source: "p17", target: "p19" },
    { id: "p18-p20", source: "p18", target: "p20" },

    // Cross connections for more graph complexity
    { id: "p3-p9", source: "p3", target: "p9" },
    { id: "p5-p8", source: "p5", target: "p8" },
    { id: "p11-p15", source: "p11", target: "p15" },
    { id: "p12-p18", source: "p12", target: "p18" },
];

const Graph = () => {
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);
    const [selectedProcessID, setSelectedProcessID] = useState<string | null>(null);

    const calculateNodes = (edges: Edge[], initialNodes: { process_step_id: string; process_step_name: string }[]) => {
        const sources = new Set(edges.map((item) => item.source));
        const targets = new Set(edges.map((item) => item.target));
        const start = Array.from(sources).filter((source) => !targets.has(source))[0];

        const nodes = [{ id: start, position: { x: 0, y: 0 }, data: { label: "Step 1" } }];

        let sourceToCheck = [start];
        let hasTargets = true;
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
                        label: initialNodes.find((item) => item.process_step_id === node)?.process_step_name || "N/A",
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
            }))
        );
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        calculateNodes(edges, initialNodes);
    }, [edges]);

    return (
        <>
            <div style={{ width: "100vw", height: "100vh" }}>
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
