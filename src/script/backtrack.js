import { updateBoard } from "../redux/board/board.actions";
import { updateResult } from "../redux/result/result.actions";

var solveNQueens = function (n, dispatch) {
  //create empty chess board
  //String in javascript is immutable, so here I use 2D array for chess board
  var chessBoard = new Array(n);
  for (var i = 0; i < n; i++) {
    chessBoard[i] = new Array(n).fill("Q");
  }

  chessBoard[0][0] = "Q";
  console.log(chessBoard);
  dispatch(updateBoard(chessBoard));

  var result = [];

  var isValidQueen = function (row, col) {
    //check for spots above on this column
    for (let i = 0; i < row; i++) {
      if (chessBoard[i][col] === "Q") return false;
    }
    //check for up left
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessBoard[i][j] === "Q") return false;
    }
    //check for up right
    for (let i = row - 1, j = col + 1; i >= 0 && j <= n - 1; i--, j++) {
      if (chessBoard[i][j] === "Q") return false;
    }
    return true;
  };

  var backtrack = function (row) {
    if (row === n) {
      result.push([...chessBoard].map((row) => row.join("")));
      dispatch(updateResult(result));
      return;
    }
    for (var col = 0; col < n; col++) {
      if (isValidQueen(row, col)) {
        chessBoard[row][col] = "Q";
        backtrack(row + 1);
        chessBoard[row][col] = ".";
      }
    }
  };
  backtrack(0);
  // console.log(result);
};

export default solveNQueens;
