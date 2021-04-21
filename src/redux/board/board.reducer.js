import actionType from "../action-types";

const INITIAL_STATE = {
  boardSize: 8 ** 2,
  currentBoard: null,
};

const boardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.UPDATE_SIZE:
      return {
        ...state,
        boardSize: action.payload ** 2,
      };
    case actionType.UPDATE_BOARD:
      return {
        ...state,
        board: action.payload,
      };
    // case actionType.ADD_QUEEN:
    // case actionType.REMOVE_QUEEN:
    case actionType.RESET_BOARD:
      return {
        board: null,
      };
    default:
      return state;
  }
};

export default boardReducer;
