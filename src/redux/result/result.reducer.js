import actionTypes from "../action-types";

const INITIAL_STATE = {
  currentResult: [],
};

const resultReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_RESULT:
      return {
        ...state,
        currentResult: action.payload,
      };

    case actionTypes.RESET_RESULT:
      return {
        ...state,
        currentResult: [],
      };
    default:
      return state;
  }
};

export default resultReducer;
