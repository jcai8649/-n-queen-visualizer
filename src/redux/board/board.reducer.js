import actionType from "../action-types";

const createBoard = (n) => {
  var chessBoard = new Array(n);
  for (var i = 0; i < n; i++) {
    chessBoard[i] = new Array(n).fill(".");
  }

  return chessBoard;
};

const INITIAL_STATE = {
  currentBoard: [...createBoard(8)],
};

const boardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case actionType.UPDATE_SIZE:
    //   return {
    //     ...state,
    //     boardSize: action.payload ** 2,
    //   };
    case actionType.UPDATE_BOARD:
      return {
        ...state,
        currentBoard: action.payload,
      };
    // case actionType.ADD_QUEEN:
    // case actionType.REMOVE_QUEEN:
    case actionType.RESET_BOARD:
      return {
        currentBoard: [],
      };
    default:
      return state;
  }
};

export default boardReducer;
