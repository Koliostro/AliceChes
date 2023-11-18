import { Board } from "./field.js";
import { Bishop, King, Knight, Pawn, Queen, Rock } from "./piece.js";
var VisualBoard = new Board(true);
VisualBoard.fieldGeneration();
var BK = new King('b_k_0', [3, 4], true, false);
BK.create();
var WB0 = new Bishop('w_b_0', [0, 1], true);
WB0.create();
var BR0 = new Rock('b_r_0', [2, 3], true, false);
BR0.create();
var BQ = new Queen('b_q_0', [3, 1], true);
BQ.create();
var BN0 = new Knight('b_n_0', [1, 3], true);
BN0.create();
var BP0 = new Pawn('b_p_0', [1, 6], true);
BP0.create();
var WP0 = new Pawn('w_p_0', [1, 1], true);
WP0.create();
export var ArrayBoards = {
    'L': [
        [[], [], [], [], [], [], [], []],
        [[WB0], [WP0], [], [BQ], [], [], [], []],
        [[], [], [], [], [], [], [], []],
        [[], [BN0], [BR0], [], [], [], [], []],
        [[], [], [], [BK], [], [], [], []],
        [[], [], [], [], [], [], [], []],
        [[], [BP0], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], []]
    ],
    'R': [
        [[], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], []]
    ]
};