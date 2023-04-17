import changeNumber from "./Inc_Dec";
import { combineReducers } from "redux";

//for using multiple reducers, we use combineReducer
const rootReducer = combineReducers({
    changeNumber
});
export default rootReducer;