import actionType from "../action-types";

export const addQueen = (queenID) => ({
  type: actionType.ADD_QUEEN,
  payload: queenID,
});

export const updateBoard = (board) => ({
  type: actionType.UPDATE_BOARD,
  payload: board,
});
