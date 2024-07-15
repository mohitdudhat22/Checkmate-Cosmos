'use client';
import { Tree } from "react-tree-graph";
import { useState } from "react";
import data, { generateChildren } from "./data"; // Adjust as per your data structure

interface ChessNode {
  name: string;
  pathProps: object;
  textProps: React.SVGProps<SVGTextElement>;
  currentGame?: string;
  nextMoves: string[];
  children: ChessNode[];
}

export default function Home() {
  const [treeData, setTreeData] = useState<ChessNode>(data);

  const handleNodeClick = (event: any, node: any) => {
    console.log('Clicked node data:', node);
    
    // Find the clicked node in the current tree data
    const choosedMove = treeData.children.find(move => move.name === node);
    
    if (choosedMove?.currentGame) {
      // Generate children for the chosen move
      choosedMove.children = choosedMove.children.concat(generateChildren(choosedMove.currentGame));
      
      // Update the tree data with new children
      setTreeData({ ...treeData });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Tree
        data={treeData}
        margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
        gProps={{
          className: 'node',
          style: { cursor: 'pointer' },
          onClick: handleNodeClick
        }}
        height={700}
        width={1000}
      />
    </main>
  );
}
