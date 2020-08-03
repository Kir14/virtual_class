import {combineReducers} from "redux";
import StudentReducer from "./student"


const allReducers = combineReducers(
    {
        students: StudentReducer,

    }
);

export default allReducers