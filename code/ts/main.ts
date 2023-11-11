import { Board } from "./field.js";
import { Bishop, King, Rock } from "./piece.js";

const VisualBoard = new Board(true)

VisualBoard.fieldGeneration();  

let BK = new King('b_k_0', [3,3], true, false)
BK.create()

let WB0 = new Bishop('b_b_0', [7,7], true)
WB0.create()

let WR0 = new Rock('b_r_0', [0,0], true, false)
WR0.create()

export let ArrayBoards : any = {
    'L' : [
        [[WR0],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[BK],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[WB0]]
    ],
    'R' : [
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]],
        [[],[],[],[],[],[],[],[]]
    ]
}