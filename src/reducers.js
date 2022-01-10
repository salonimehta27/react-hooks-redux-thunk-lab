import { combineReducers } from "redux";
import catsReducer from "./features/cats/catsSlice";

export default combineReducers({
       cats: catsReducer,
    })