'use client'

//@ts-ignore
import Image from "next/image";
import data, { generateChildren } from "./data";
import { Tree } from "react-tree-graph";
import { Chess } from "chess.js";
import { Children } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Tree
      animated={true}
      data={data}
      nodeRadius={15}
      margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
      gProps={{
					className: 'node',
          style: { cursor: 'pointer' },
					onClick : (event:any,node:any,)=>{
            console.log('Hovered node data:', node);
            //find the node form children from the currect depth
            const choosedMove = data.children.find(move => move.name === node);
            if (choosedMove?.currentGame) {
              choosedMove.children = choosedMove.children.concat(generateChildren(choosedMove.currentGame));
            }
            console.log(data);
            console.log(choosedMove);
            // nextMove(choosedMove);
          }
				}}
	    height={700}
	    width={1000}/>
    </main>
  );
}
