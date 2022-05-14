import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
  appReducer,
  productReducer,
});
