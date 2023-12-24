import { combineReducers } from "redux";
import { Productreducer } from "./Productreducer";

export const reducer=combineReducers({
    productsData: Productreducer,

})