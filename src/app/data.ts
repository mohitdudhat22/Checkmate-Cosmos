'use client'
import { Chess } from 'chess.js'
interface ChessNode {
    name: string;
    pathProps: object;
    textProps: { x: number, y: number };
    currentGame: string | undefined;
    nextMoves: string[];
    children: ChessNode[];
}
const chess = new Chess(); 
export const generateChildren = (currentGame: string): ChessNode[] => {
    const newChess = new Chess(currentGame);
    return newChess.moves().map((move: string) => {
        const newGame = new Chess(currentGame);
        newGame.move(move);
        return {
            name: move,
            pathProps: {},
            textProps: { x: -30, y: -15 },
            children: [],
            currentGame: newGame.fen(),
            nextMoves: newGame.moves(),
        };
    });
};

const graph: ChessNode = {
    name: 'Chess Game Starting',
    pathProps: {},
    textProps: { x: -25, y: 25 },
    currentGame: chess.fen(),
    nextMoves: chess.moves(),
    children: generateChildren(chess.fen())
};

console.log(graph);
export default graph;