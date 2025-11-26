import { ReactFlow, type Edge, type Node } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useEffect, useState } from "react";

// const initialNodes = [
//   { id: "n1", position: { x: 0, y: 0 }, data: { label: "Step 1" } },
//   { id: "n2", position: { x: 0, y: 100 }, data: { label: "Step 2" } },
//   { id: "n3", position: { x: 200, y: 100 }, data: { label: "Step 3" } },
//   { id: "n4", position: { x: -200, y: 100 }, data: { label: "Step 4" } },
//   { id: "n5", position: { x: 400, y: 100 }, data: { label: "Step 5" } },
//   { id: "n6", position: { x: -400, y: 100 }, data: { label: "Step 6" } },
//   { id: "n7", position: { x: 100, y: 400 }, data: { label: "Step 7" } },
//   { id: "n8", position: { x: -100, y: 500 }, data: { label: "Step 8" } },
//   { id: "n9", position: { x: 0, y: 600 }, data: { label: "Step 9" } },
// ];

// const initialNodes = [
//   { process_step_id: "n1", process_step_name: "Step 1" },
//   { process_step_id: "n2", process_step_name: "Step 2" },
//   { process_step_id: "n3", process_step_name: "Step 3" },
//   { process_step_id: "n4", process_step_name: "Step 4" },
//   { process_step_id: "n5", process_step_name: "Step 5" },
//   { process_step_id: "n6", process_step_name: "Step 6" },
//   { process_step_id: "n7", process_step_name: "Step 7" },
//   { process_step_id: "n8", process_step_name: "Step 8" },
//   { process_step_id: "n9", process_step_name: "Step 9" },
// ];

// const initialEdges: Edge[] = [
//   { id: "n1-n2", source: "n1", target: "n2" },
//   { id: "n1-n3", source: "n1", target: "n3" },
//   { id: "n2-n4", source: "n2", target: "n4" },
//   { id: "n3-n4", source: "n3", target: "n4" },
//   { id: "n4-n5", source: "n4", target: "n5" },
//   { id: "n5-n6", source: "n5", target: "n6" },
//   { id: "n5-n7", source: "n5", target: "n7" },
//   { id: "n6-n8", source: "n6", target: "n8" },
//   { id: "n8-n9", source: "n8", target: "n9" },
//   { id: "n7-n9", source: "n7", target: "n9" },
// ];

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

  const calculateNodes = (
    edges: Edge[],
    initialNodes: { process_step_id: string; process_step_name: string }[]
  ) => {
    const sources = new Set(edges.map((item) => item.source));
    const targets = new Set(edges.map((item) => item.target));
    const start = Array.from(sources).filter(
      (source) => !targets.has(source)
    )[0];

    const nodes = [
      { id: start, position: { x: 0, y: 0 }, data: { label: "Step 1" } },
    ];

    let sourceToCheck = [start];
    let hasTargets = true;
    const levels = [];

    levels.push([start]);

    while (hasTargets) {
      const children = edges.filter((edge) =>
        sourceToCheck.includes(edge.source)
      );

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
            label:
              initialNodes.find((item) => item.process_step_id === node)
                ?.process_step_name || "N/A",
          },
        });
      });
    });

    setNodes(nodes);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    calculateNodes(edges, initialNodes);
  }, [edges]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={true}
        fitView
      />
    </div>
  );
};

export default Graph;
