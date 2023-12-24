import { createStore } from "redux";
import { reducer } from "../ProductReducer/Reducer";

export const store=createStore(reducer,{})