import { combineReducers } from "redux";
import { ToDoReducer } from "./ToDoReducer";
export let rootReducer = combineReducers({
  ToDoReducer,
});
