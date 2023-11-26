import { createStore } from "redux";
import toDoReducer from "./toDo/toDoReducer";
const store=createStore(toDoReducer)
export default store