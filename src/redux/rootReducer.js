import { combineReducers } from "redux";
import CatsReducer from "./catsReducer";
const rootReducer = combineReducers({ CatsReducer });

export default rootReducer;
