import { combineReducers } from "redux";

import boardReducer from "./board/board.reducer";
import resultReducer from "./result/result.reducer";

export default combineReducers({
  board: boardReducer,
  result: resultReducer,
});
