import actionType from "../action-types";

const INITIAL_STATE = {
  currentBoard: null,
};

const boardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.UPDATE_BOARD:
      return {
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
