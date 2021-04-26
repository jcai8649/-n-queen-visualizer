import actionType from "../action-types";

export const updateResult = (result) => ({
  type: actionType.UPDATE_RESULT,
  payload: result,
});

export const resetResult = () => ({
  type: actionType.RESET_RESULT,
});
